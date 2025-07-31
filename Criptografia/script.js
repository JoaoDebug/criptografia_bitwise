let criptografado = ""

    function criptografar() {
      const senha = document.getElementById('senha').value
      const chave = parseInt(document.getElementById('chave').value)
      if (!senha || isNaN(chave)) {
        document.getElementById('resultado').innerText = "Digite uma senha e uma chave válida."
        return
      }
      let resultado = ""
      for (let i = 0; i < senha.length; i++) {
        resultado += String.fromCharCode(senha.charCodeAt(i) ^ chave)
      }
      criptografado = resultado
      document.getElementById('resultado').innerText = `Senha criptografada: ${btoa(criptografado)}`
    }

    function descriptografar() {
      const chave = parseInt(document.getElementById('chave').value)
      if (!criptografado || isNaN(chave)) {
        document.getElementById('resultado').innerText = "Criptografe uma senha primeiro e digite a mesma chave."
        return
      }
      let resultado = ""
      for (let i = 0; i < criptografado.length; i++) {
        resultado += String.fromCharCode(criptografado.charCodeAt(i) ^ chave)
      }
      document.getElementById('resultado').innerText = `Senha original: ${resultado}`
    }