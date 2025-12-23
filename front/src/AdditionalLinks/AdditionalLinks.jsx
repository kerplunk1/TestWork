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
                <TableCell><a href={`${API_URL}/api/get-file/Шайдуллин Александр Валерьевич.pdf`}>Ссылка на мое резюме.pdf</a></TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='attr-title'><b>Telegram</b></TableCell>
                <TableCell><a href="https://t.me/cynepsonic">https://t.me/cynepsonic</a></TableCell>
              </TableRow>
            
              <TableRow>
                <TableCell className='attr-title'><b>Ссылка на репзиторий GitHub</b></TableCell>
                <TableCell><a href="">Ссылка на репзиторий GitHub</a></TableCell>
              </TableRow>

              <TableRow>
                <TableCell className='attr-title'><b>Ссылка на опубликованную в интернете HTML страницу</b></TableCell>
                <TableCell><a href="">Ссылка на опубликованную в интернете HTML страницу</a></TableCell>
              </TableRow>

              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell className='attr-title'><b>Ссылка на видео-презентацию</b></TableCell>
                <TableCell><a href={`${API_URL}/api/get-file/GTA_gameplay.mov`}>Ссылка на видео-презентацию</a></TableCell>
              </TableRow>
            
            </TableBody>
          </Table>
        </TableContainer>

      </Box>
  )
}