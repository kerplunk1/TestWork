import aiohttp

API_URL = "https://1103.api.green-api.com"


async def get_settings(id_instance, api_token_instance):
    url = f"{API_URL}/waInstance{id_instance}/getSettings/{api_token_instance}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            status_code = response.status
            text = await response.text()
            return {"status": status_code, "text": text}
        

async def get_state_instance(id_instance, api_token_instance):
    url = f"{API_URL}/waInstance{id_instance}/getStateInstance/{api_token_instance}"
    async with aiohttp.ClientSession() as session:
        async with session.get(url) as response:
            status_code = response.status
            text = await response.text()
            return {"status": status_code, "text": text}


async def send_message(id_instance, api_token_instance, chat_id, message):
    url = f"{API_URL}/waInstance{id_instance}/sendMessage/{api_token_instance}"
    payload = {
        "chatId": chat_id,
        "message": message
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(url, json=payload) as response:
            status_code = response.status
            text = await response.text()
            return {"status": status_code, "text": text}


async def send_file_by_url(id_instance, api_token_instance, chat_id, url_file):
    url = f"{API_URL}/waInstance{id_instance}/sendFileByUrl/{api_token_instance}"
    file_name = url_file.split("/")[-1]
    payload = {
        "chatId": chat_id,
        "urlFile": url_file,
        "fileName": file_name
    }
    async with aiohttp.ClientSession() as session:
        async with session.post(url, json=payload) as response:
            status_code = response.status
            text = await response.text()
            return {"status": status_code, "text": text}

