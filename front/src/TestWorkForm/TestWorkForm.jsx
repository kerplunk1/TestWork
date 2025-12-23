import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { getSettings, getStateInstance, sendMessage, sendFileByUrl } from '../requests';
import './TestWorkForm.css'

export default function TestWorkForm () {

  const [idInstance, setIdInstance] = useState("")
  const [ApiTokenInstance, setApiTokenInstance] = useState("")
  const [chatId, setchatId] = useState("")
  const [message, setMessage] = useState("")
  const [urlFile, setUrlFile] = useState("")

  const [result, setResult] = useState()
  
  const getSettingsRequest = async () => {
    setResult()
    const response = await getSettings(idInstance, ApiTokenInstance)
    setResult(response)
  }

  const getStateInstanceRequest = async () => {
    setResult()
    const response = await getStateInstance(idInstance, ApiTokenInstance)
    setResult(response)
  }

  const sendMessageRequest = async () => {
    setResult()
    const response = await sendMessage(idInstance, ApiTokenInstance, chatId, message)
    setResult(response)
  }

  const sendFileByUrlRequest = async () => {
    setResult()
    const response = await sendFileByUrl(idInstance, ApiTokenInstance, chatId, urlFile)
    setResult(response)
  }


  const [getSettingsButtonDisabled, setGetSettingsButtonDisabled] = useState(true)
  const [getStateInstanceButtonDisabled, setGetStateInstanceButtonDisabled] = useState(true)
  const [sendMessageButtonDisable, setSendMessageButtonDisabled] = useState(true)
  const [sendFileByUrlButtonDisabled, setSendFileByUrlButtonDisabled] = useState(true)

  useEffect(() => {
    if(idInstance && ApiTokenInstance) {
      setGetSettingsButtonDisabled(false)
      setGetStateInstanceButtonDisabled(false)
    }
    else {
      setGetSettingsButtonDisabled(true)
      setGetStateInstanceButtonDisabled(true)
    }

    if (idInstance && ApiTokenInstance && chatId && message) {
      setSendMessageButtonDisabled(false)
    }
    else {
      setSendMessageButtonDisabled(true)
    }


    if (idInstance && ApiTokenInstance && chatId && urlFile) {
      setSendFileByUrlButtonDisabled(false)
    }
    else {
      setSendFileByUrlButtonDisabled(true)
    }

  }, [idInstance, ApiTokenInstance, chatId, message, urlFile])


  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className='box'
      >
      
      <div className='input-fields'>
        <div className='settings'>
          <TextField
              required
              id="idInstance"
              label="idInstance"
              value={idInstance}
              className='idInstance-input'
              onChange={e => setIdInstance(e.target.value)}
          />
          <TextField
              required
              id="ApiTokenInstance"
              label="ApiTokenInstance"
              value={ApiTokenInstance}
              className='ApiTokenInstance-input'
              onChange={e => setApiTokenInstance(e.target.value)}
          />
          <Button 
            className='get-settings-button'
            variant="contained"
            disabled={getSettingsButtonDisabled}
            onClick={getSettingsRequest}
            >
              getSettings
          </Button>
          <Button 
            className='get-state-instance-button'
            variant="contained"
            disabled={getStateInstanceButtonDisabled}
            onClick={getStateInstanceRequest}
            >
              getStateInstance
          </Button>
        </div>

        <div className='message'>
          <TextField
              required
              id="chatId"
              label="chatId"
              value={chatId}
              className='chatId-input'
              onChange={e => setchatId(e.target.value)}
          />
          <TextField
              required
              id="message"
              label="message"
              value={message}
              multiline
              maxRows={3}
              className='message-input'
              onChange={e => setMessage(e.target.value)}
          />
          <Button 
            className='send-message-button'
            variant="contained"
            disabled={sendMessageButtonDisable}
            onClick={sendMessageRequest}
            >
              sendMessage
          </Button>
        </div>

        <div className='file'>
        <TextField
            required
            id="chatId"
            label="chatId"
            value={chatId}
            className='chatId-input'
            onChange={e => setchatId(e.target.value)}
        />
        <TextField
            required
            id="urlFile"
            label="urlFile"
            value={urlFile}
            multiline
            maxRows={3}
            className='urlFile-input'
            onChange={e => setUrlFile(e.target.value)}
        />
        <Button 
          className='send-file-button'
          variant="contained"
          disabled={sendFileByUrlButtonDisabled}
          onClick={sendFileByUrlRequest}
          >
            sendFileByUrl
        </Button>
        </div>
      </div>
      
      <div className='response-fields'>
        { result && <p><b>Ответ:</b></p>}
        { result && <p>{result.status}</p> }
        { result && <p>{result.text}</p> }
      </div>
      
    </Box>

  );
}