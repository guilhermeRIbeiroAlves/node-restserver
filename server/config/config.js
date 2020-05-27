//===================
//puerto
// ==================

process.env.PORT = process.env.PORT || 3000;

//===================
//entorno
// ==================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//===================
//Base de datos
// ==================
let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe'
} else {
    urlDB = 'mongodb+srv://guilherme:RFy0eKyY6dokd3aJ@cluster0-bapx2.mongodb.net/test?retryWrites=true&w=majority'
}

process.env.URLDB = urlDB;