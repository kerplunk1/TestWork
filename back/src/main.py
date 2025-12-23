import os
import mimetypes
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from src.services import green_api
from src.models.green_api import SendMessageModel, SendFileByUrlModel

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/get-settings")
async def get_settings(idInstance: str, apiTokenInstance: str):
    response = await green_api.get_settings(idInstance, apiTokenInstance)
    return response


@app.get("/api/get-state-instance")
async def get_state_instance(idInstance: str, apiTokenInstance: str):
    response = await green_api.get_state_instance(idInstance, apiTokenInstance)
    return response


@app.post("/api/send-message")
async def send_message(r: SendMessageModel):
    response = await green_api.send_message(r.idInstance,
                                            r.apiTokenInstance,
                                            r.chatId,
                                            r.message)
    return response


@app.post("/api/send-file-by-url")
async def send_file_by_url(r: SendFileByUrlModel):
    response = await green_api.send_file_by_url(r.idInstance,
                                                r.apiTokenInstance,
                                                r.chatId,
                                                r.urlFile)
    return response


@app.get("/get-file/{filename}")
async def get_file(filename: str):
    BASE_DIR = Path(os.getcwd()) / "files"
    file_path = (BASE_DIR / filename).resolve()
    if not file_path.exists() or not file_path.is_file():
        raise HTTPException(status_code=404, detail="File not found")
    if BASE_DIR not in file_path.parents:
        raise HTTPException(status_code=403, detail="Access denied")
    mime_type, _ = mimetypes.guess_type(file_path)
    return FileResponse(file_path,
                        filename=filename,
                        media_type=mime_type or "application/octet-stream")


app.mount("/", StaticFiles(directory="../front/dist", html=True), name="static")
@app.get("/")
async def index():
    return FileResponse("../front/dist/index.html")
