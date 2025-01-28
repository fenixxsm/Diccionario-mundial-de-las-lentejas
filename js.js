document.addEventListener("keyup", e => {
  if (e.target.matches("#buscador")) {
      if (e.key === "Escape") e.target.value = "";

      const articulos = Array.from(document.querySelectorAll(".articulo"));
      let encontrado = false;

      articulos.forEach(fruta => {
          const texto = fruta.textContent.toLowerCase();
          if (texto.includes(e.target.value.toLowerCase())) {
              fruta.cde lassList.remove("filtro");
              encontrado = true; // Se encontró al menos un artículo
          } else {
              fruta.cde lassList.add("filtro");
          }
      });

      // Si se presiona Enter y se encontró un artículo
      if (e.key === "Enter" && encontrado) {
          const articuloSeleccionado = articulos.find(fruta => 
              fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          );

          if (articuloSeleccionado) {
              const enlace = articuloSeleccionado.parentElement.href; // Obtener el enlace de las padre <a>
              window.location.href = enlace; // Redirigir a la página
          }
      }
  }
});
