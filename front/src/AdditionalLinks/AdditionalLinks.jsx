import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import './AdditionalLinks.css'

const API_URL = import.meta.env.VITE_API_URL;


export default function AdditionallLinks () {
  return (
      <Box
      component="form"
      noValidate
      autoComplete="off"
      className='box'
      >
        <TableContainer className='table'>
          <Table aria-label="simple table">
            <TableBody>
              
              <TableRow>
                <TableCell className='attr-title'><b>Мое резюме</b></TableCell>
                <TableCell><a href={`${API_URL}/get-file/Шайдуллин Александр Валерьевич.pdf`} target="_blank">Шайдуллин Александр Валерьевич.pdf</a></TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='attr-title'><b>Telegram</b></TableCell>
                <TableCell><a href="https://t.me/cynepsonic" target="_blank">https://t.me/cynepsonic</a></TableCell>
              </TableRow>
            
              <TableRow>
                <TableCell className='attr-title'><b>Репозиторий GitHub</b></TableCell>
                <TableCell><a href="https://github.com/kerplunk1/TestWork" target="_blank">https://github.com/kerplunk1/TestWork</a></TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='attr-title'><b>Ссылка на опубликованную в интернете HTML страницу</b></TableCell>
                <TableCell><a href="https://testwork.cynepsonic.keenetic.pro/" target="_blank">https://testwork.cynepsonic.keenetic.pro/</a></TableCell>
              </TableRow>

              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell className='attr-title'><b>Видео-презентация</b></TableCell>
                <TableCell><a href={`${API_URL}/get-file/Шайдуллин Александр Валерьевич.mp4`} target="_blank">Шайдуллин Александр Валерьевич.mp4</a></TableCell>
              </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
  )
}