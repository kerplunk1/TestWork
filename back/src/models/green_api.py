from pydantic import BaseModel

class SendMessageModel(BaseModel):
    idInstance: str
    apiTokenInstance: str
    chatId: str
    message: str


class SendFileByUrlModel(BaseModel):
    idInstance: str
    apiTokenInstance: str
    chatId: str
    urlFile: str


