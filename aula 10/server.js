// Servidor Express - Projeto #31: Gráfica Rápida & Impressão 3D
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3031;

app.get('/api/impressao3d/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 31,
        sistema: "Gráfica Rápida & Impressão 3D",
        categoria: "Manufatura Digital",
        tabela_conectada: process.env.TABELA_ALVO || "fila_impressoras",
        parametro_ambiente: process.env.FARM_FILAMENTO || "MAKER_LAB_31",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #31] Gráfica Rápida & Impressão 3D rodando em http://localhost:${PORT}/api/impressao3d/status`);
});