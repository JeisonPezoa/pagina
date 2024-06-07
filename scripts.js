function solicitarMenu(menuId) {
    const menuBox = document.getElementById(menuId);
    const countElement = menuBox.querySelector('.count');
    let count = parseInt(countElement.innerText);
    if (count > 0) {
        count--;
        countElement.innerText = count;
        mostrarIngredientes(menuId); 
        setTimeout(() => {
            window.location.href = "imprimir.html?menu=" + menuId;
        }, 1000); 
    } else {
        alert('No hay más menús disponibles para ' + menuId);
    }
}

function mostrarIngredientes(menuId) {
   
    let ingredientes = {
        menu1: "Ingredientes del menú 1: Ingrediente 1, Ingrediente 2, Ingrediente 3",
        menu2: "Ingredientes del menú 2: Ingrediente A, Ingrediente B, Ingrediente C",
       
    };

    
    let descripcion = ingredientes[menuId];

  
    alert(descripcion);
}
