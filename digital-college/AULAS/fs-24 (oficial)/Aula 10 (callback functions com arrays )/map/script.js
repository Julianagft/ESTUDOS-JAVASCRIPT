const imagensUrl = ["https://conteudo.imguol.com.br/c/noticias/1c/2022/05/24/imagem-criada-no-imagen-prototipo-do-google-que-cria-imagens-baseadas-em-texto-neste-caso-um-cachorro-corgi-andando-de-bicicleta-na-times-square-usando-oculos-de-sol-e-chapeu-de-praia-1653397634334_v2_900x506.jpg", "https://s2-techtudo.glbimg.com/SSAPhiaAy_zLTOu3Tr3ZKu2H5vg=/0x0:1024x609/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/c/u/15eppqSmeTdHkoAKM0Uw/dall-e-2.jpg","https://imagens.mdig.com.br/thbs/45184mn.jpg", "https://ichef.bbci.co.uk/news/640/cpsprodpb/00e2/live/3518d090-637b-11ee-bf62-3360c46602f9.jpg"];


const imagens = imagensUrl.map((url) => {
    const img = document.createElement("img");
    img.src =  url;

    return img
})

imagens.forEach((img) => document.body.appendChild(img));