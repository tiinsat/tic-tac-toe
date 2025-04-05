const express = require("express");
const { PrismaClient } = require("@prisma/client");
const req = require("express/lib/request");

const app = express();
const prisma = new PrismaClient();

const PORT = 8080;

app.use(express.json());
app.use(express.static("public"));

app.get("/api", (req, res) => {
    res.json({ message: "API funcionando corretamente!" });
});

app.post("/api/v1/usuarios", async (req, res) =>{
    const   {
                nome, 
                email, 
                senha, 
                username, 
                avatar
            } = req.body;

    const usuario = await prisma.usuario.create({
        data: {
            nome, 
            email, 
            senha, 
            username, 
            avatar
        }        
    });

    res.status(201).json(usuario);
});

// app.post("/api/v1/conexao", async(data, response))
app.post("/api/v1/conexao", async(req, res)=>{
    // console.log(req, res);
    const {
        id_usuario_a,
        id_usuario_b
    } = req.body;

    console.log(prisma.conexao)

    // const conexao = await prisma.conexao.create({
    //     data: {
    //         id_usuario_a,
    //         id_usuario_b
    //     }
    // });

    // console.log(conexao);
    // res.status(201).json(conexao);
})


app.post('/api/v1/login', async(req, res) => {
    const {email, senha }= req.body;
    const usuario = await prisma.usuario.findUnique({where:{email, senha}});

    if(usuario == null){
        return res.status(401).json({error:"Credenciais Inválidas"});
    }
    else{
        return res.status(200).json(usuario);
    }
})


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
