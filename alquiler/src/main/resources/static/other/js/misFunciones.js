/* $(document).ready(function(){
    getCategory();
    getOrtopedic();
    getClient();
    getMessage();
    getReservation();
  });
 */

  //CODIGO CATEGORY

function saveCategory() {
    let dataCategory = {
        id: $("#idCategory").val(),
        name: $("#nameCategory").val(),
        description: $("#descriptionCategory").val()
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(dataCategory),
        //url: "http://localhost:80/api/Category/save",
        url: "http://140.238.190.155:80/api/Category/save",

        success: function (response) {
            $("#resultCategory").empty();
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            $("#idCategory").val("");
            alert("Se ha guardado la informacion")
            getCategory();

        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible guardar la informacion.!!!");
        }
    });

}

function getCategory() {
    $.ajax({
        //url: "http://localhost:80/api/Category/all",
        url: "http://140.238.190.155:80/api/Category/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            printCategory(respuesta);            
            let $select = $("#categoryId");
            $select.empty(); 
            $.each(respuesta, function(id, name){                                             
                $select.append('<option value = '+name.id+'>'+name.name+'</option>');                                
                console.log("select "+name.id);                                                     
            });        
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Error al traer la informacion.!!!");
        },
    });
}


function printCategory(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i = 0; i < items.length; i++) {
        myTable += `
        <div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-body text-primary">
                <h5 class="card-title">${items[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].description}</h6>
                <button class="btn btn-danger" onclick="deleteCategory(${items[i].id})">Borrar</button>
                <button class="btn btn-link" onclick="getItemCategory(${items[i].id})">Cargar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>";
    $("#resultCategory").html(myTable);
}

function getItemCategory(idItem) {
    $.ajax({
        //url: "http://localhost:80/api/Category/" + idItem,
        url: "http://140.238.190.155:80/api/Category/" + idItem,
        dataType: 'JSON',
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;

            $("#nameCategory").val(item.name);
            $("#descriptionCategory").val(item.description);
            $("#idCategory").val(item.id);
            alert("Informacion lista para ser editada")

        },

        error: function (jqXHR, textStatus, errorThrown) {
            //window.location.reload()
            alert("Error al cargar la informacion.!!!");
        }
    });

}

function updateCategory() {
    let dataCategory = {
        id: $("#idCategory").val(),
        name: $("#nameCategory").val(),
        description: $("#descriptionCategory").val(),

    };

    //let dataToSend = JSON.stringify(dataCategory);
    $.ajax({
        //url: "http://localhost:80/api/Category/update",
        url: "http://140.238.190.155:80/api/Category/update",

        type: "PUT",
        data: JSON.stringify(dataCategory),
        contentType: "application/JSON; charset=utf-8",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultCategory").empty();
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            $("#idCategory").val("");
            alert("Se ha actualizado la informacion");
            getCategory();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible editar la informacion.!!!");
        }

    });
}

function deleteCategory(idElemento) {
    let myData = {
        id: idElemento
    };
    //let dataToSend = JSON.stringify(myData);
    $.ajax({
        //url: "http://localhost:80/api/Category/" + idElemento,
        url: "http://140.238.190.155:80/api/Category/" + idElemento,
        type: "DELETE",
        data: JSON.stringify(myData),
        //  data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",

        success: function (respuesta) {
            $("#resultCategory").empty();
            $("#nameCategory").val("");
            $("#descriptionCategory").val("");
            $("#idCategory").val("");
            getCategory();
            alert("Se ha eliminado el elemento")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al tratar de eliminar !!!")
        }
    });
}

//ORTOPEDIC

function saveOrtopedic() {
    let dataOrtopedic = {
        id: $("#idOrtopedic").val(),
        name: $("#nameOrtopedic").val(),
        brand: $("#brandOrtopedic").val(),
        year: $("#yearOrtopedic").val(),
        description: $("#descriptionOrtopedic").val(),
        category: {id:+$("#categoryId").val()},        
    };

    $.ajax({
        //url: "http://localhost:80/api/Ortopedic/save",
        url: "http://140.238.190.155:80/api/Ortopedic/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dataOrtopedic),
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultOrtopedic").empty();
            $("#idOrtopedic").val("");
            $("#nameOrtopedic").val("");
            $("#brandOrtopedic").val("");
            $("#yearOrtopedic").val("");
            $("#descriptionOrtopedic").val("");
            $("#categoryOrtopedic").val("");
            $("#categoryId").val("");
            getOrtopedic();
            alert("Se ha guardado la informacion")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible guardar la informacion.!!!");
        },

    });

}


function getOrtopedic() {
    $.ajax({
        //url: "http://localhost:80/api/Ortopedic/all",
        url: "http://140.238.190.155:80/api/Ortopedic/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            printOrtopedic(respuesta);
            let $select = $("#ortopedicReser, #ortopedicId");        
            $select.empty(); 
            $.each(respuesta, function(id, name){                                             
                $select.append('<option value = '+name.id+'>'+name.name+'</option>');                                
                console.log("select "+name.id);                                                     
            });
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Error al traer la informacion.!!!");
        },
    });
}


function printOrtopedic(items) {
    let myTable = '<div class="container"><div class="row">';
    for (i = 0; i < items.length; i++) {
        myTable += `
        <div class="card border-secondary mb-3" style="max-width: 18rem;">
                <div class="card-body text-secondary">
                <h5 class="card-title">${items[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].brand}</h6>
                <p class="card-text">${items[i].year}</p>
                <p class="card-text">${items[i].description}</p>
                <p class="card-text">${items[i].category.name}</p>
                <button class="btn btn-danger" onclick="deleteOrtopedic(${items[i].id})">Borrar</button>
                <button class="btn btn-link" onclick="getItemOrtopedic(${items[i].id})">Cargar</button>
            </div>
        </div>
        `
    }
    myTable += "</div></div>";
    $("#resultOrtopedic").html(myTable);
}

function getItemOrtopedic(idItem) {
    $.ajax({
        //url: "http://localhost:80/api/Ortopedic/" + idItem,
        url: "http://140.238.190.155:80/api/Ortopedic/" + idItem,
        dataType: 'JSON',
        type: 'GET',
        success: function (response) {
            console.log(response);            
            var item = response;
            //console.log(item.category.description);
            $("#idOrtopedic").val(item.id);
            $("#nameOrtopedic").val(item.name);
            $("#brandOrtopedic").val(item.brand);
            $("#yearOrtopedic").val(item.year);
            $("#descriptionOrtopedic").val(item.description);            
            $("#categoryId").value(item.category.name);
            alert("Informacion lista para ser editada")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            //window.location.reload()
            alert("Error al cargar la informacion.!!!");
        }
    });
}

function updateOrtopedic() {
    let dataOrtopedic = {        
        id: $("#idOrtopedic").val(),
        name: $("#nameOrtopedic").val(),
        brand: $("#brandOrtopedic").val(),
        year: $("#yearOrtopedic").val(),
        description: $("#descriptionOrtopedic").val(),
        category: {id:+$("#categoryId").val()},        
    };

    let dataToSend = JSON.stringify(dataOrtopedic);
    $.ajax({
        //url: "http://localhost:80/api/Ortopedic/update",
        url: "http://140.238.190.155:80/api/Ortopedic/update",
        type: "PUT",
        //data: JSON.stringify(dataOrtopedic),
        data: dataToSend,
        contentType: "application/JSON; charset=utf-8",
        datatype: "JSON",
        success: function (respuesta) {            
            $("#resultOrtopedic").empty();
            $("#idOrtopedic").val("");
            $("#nameOrtopedic").val("");
            $("#descriptionOrtopedic").val("");
            $("#brandOrtopedic").val("");
            $("#yearOrtopedic").val("");
            $("#categoryId").val("");
            alert("Se ha actualizado la informacion");
            getOrtopedic();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible editar la informacion.!!!");
        }
    });
}

function deleteOrtopedic(idElemento) {
    let myData = {
        id: idElemento
    };
    //let dataToSend = JSON.stringify(myData);
    $.ajax({
        //url: "http://localhost:80/api/Ortopedic/" + idElemento,
        url: "http://140.238.190.155:80/api/Ortopedic/" + idElemento,
        type: "DELETE",
        data: JSON.stringify(myData),
        //  data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",

        success: function (respuesta) {
            $("#resultOrtopedic").empty();
            $("#idOrtopedic").val("");
            $("#nameOrtopedic").val("");
            $("#brandOrtopedic").val("");
            $("#yearOrtopedic").val("");
            $("#descriptionOrtopedic").val("");

            getOrtopedic();
            alert("Se ha eliminado el elemento")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al tratar de eliminar !!!")
        }
    });
}


//CLIENTE

function saveClient() {

    let dataClient = {
        idClient: $("#idClient").val(),
        name: $("#nameClient").val(),
        email: $("#emailClient").val(),
        password: $("#passwordClient").val(),
        age: $("#ageClient").val(),
    };

    $.ajax({
        //url: "http://localhost:80/api/Client/save",
        url: "http://140.238.190.155:80/api/Client/save",
        type: "POST",
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify(dataClient),
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultClient").empty();
            cleanClient();
            getClient();
            alert("Se ha guardado la informacion")
        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible guardar la informacion.!!!");
        },

    });

}


function getClient() {
    $.ajax({
        //url: "http://localhost:80/api/Client/all",
        url: "http://140.238.190.155:80/api/Client/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            printClient(respuesta);
            let $select = $("#clientId, #clientReser");
            $select.empty();
            $.each(respuesta, function(idClient, name){                                             
                $select.append('<option value = '+name.idClient+'>'+name.name+'</option>');                                
                console.log("select "+name.idClient);                                                     
            });   

        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Error al traer la informacion.!!!");
        },
    });
}


function printClient(items){
    let myTable = '<div class="container"><div class="row">';
    for(i=0;i<items.length;i++){
        myTable+=`
        <div class="card border-success mb-3" style="max-width: 18rem;">
            <div class="card-body text-success">
                <h5 class="card-title">${items[i].name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${items[i].age}</h6>
                <a href="#" class="card-link">${items[i].email}</a>
                <br><br>
                <button class="btn btn-danger" onclick="deleteClient(${items[i].idClient})">Borrar</button>
                <button class="btn btn-link" onclick="getItemClient(${items[i].idClient})">Cargar</button>
            </div>
        </div>
        `
    }
    myTable+="</div></div>";
    $("#resultClient").html(myTable);
}

function getItemClient(idItem) {
    $.ajax({
        //url: "http://localhost:80/api/Client/" + idItem,
        url: "http://140.238.190.155:80/api/Client/" + idItem,
        dataType: 'JSON',
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;
            $("#idClient").val(item.idClient);
            $("#nameClient").val(item.name);
            $("#emailClient").val(item.email);
            $("#passwordClient").val(item.password);
            $("#ageClient").val(item.age);
            alert("Informacion lista para ser editada")

        },

        error: function (jqXHR, textStatus, errorThrown) {
            //window.location.reload()
            alert("Error al cargar la informacion.!!!");
        }
    });
}

function updateClient() {
    let dataClient = {
        idClient: $("#idClient").val(),
        name: $("#nameClient").val(),
        email: $("#emailClient").val(),
        age: $("#ageClient").val(),
        password: $("#passwordClient").val(),
    };

    let dataToSend = JSON.stringify(dataClient);
    $.ajax({
        //url: "http://localhost:80/api/Client/update",
        url: "http://140.238.190.155:80/api/Client/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON; charset=utf-8",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultClient").empty();
            cleanClient();
            alert("Se ha actualizado la informacion");
            getClient();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible editar la informacion.!!!");
        }
    });
}

function deleteClient(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        //url: "http://localhost:80/api/Client/" + idElemento,
        url: "http://140.238.190.155:80/api/Client/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",

        success: function (respuesta) {
            $("#resultClient").empty();
            getClient();
            cleanClient();
            alert("Se ha eliminado el elemento")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al tratar de eliminar !!!")
        }
    });
}

function cleanClient() {
    $("#idClient").val(""),
    $("#nameClient").val("");
    $("#emailClient").val("");
    $("#ageClient").val("");
    $("#passwordClient").val("");
}


//MESSAGE

function saveMessage() {
    let dataMessage = {
        idMessage: $("#idMessage").val(),
        messageText: $("#textMessage").val(),
        ortopedic: {id:+$("#ortopedicId").val()},
        client: {idClient:+$("#clientId").val()},
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(dataMessage),
        //url: "http://localhost:80/api/Message/save",
        url: "http://140.238.190.155:80/api/Message/save",
        success: function (response) {
            $("#resultMessage").empty();
            $("#textMessage").val("");
            $("#idMessage").val("");
            $("#ortopedicId").val("");
            $("#clientId").val("");            
            alert("Se ha guardado la informacion")
            getMessage();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible guardar la informacion.!!!");
        }
    });
}


function getMessage() {
    $.ajax({
        //url: "http://localhost:80/api/Message/all",
        url: "http://140.238.190.155:80/api/Message/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            printMessage(respuesta);
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Error al traer la informacion.!!!");
        },
    });
}


function printMessage(items){
    let myTable = '<div class="container"><div class="row">';
    for(i=0;i<items.length;i++){
        myTable+=` 
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body text-dark">
                <h5 class="card-title">Ortopedic: ${items[i].ortopedic.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Cliente: ${items[i].client.name}</h6>
                <p class="card-text">${items[i].messageText}</p>
                <button class="btn btn-danger" onclick="deleteMessage(${items[i].idMessage})">Borrar</button>
                <button class="btn btn-link" onclick="getItemMessage(${items[i].idMessage})">Cargar</button>
            </div>
        </div>
        `
    }
    myTable+="</div></div>";
    $("#resultMessage").html(myTable);
}

function getItemMessage(idItem) {
    $.ajax({
        //url: "http://localhost:80/api/Message/" + idItem,
        url: "http://140.238.190.155:80/api/Message/" + idItem,
        dataType: 'JSON',
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;
            $("#idMessage").val(item.idMessage);
            $("#textMessage").val(item.messageText);
            alert("Informacion lista para ser editada")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //window.location.reload()
            alert("Error al cargar la informacion.!!!");
        }
    });
}

function updateMessage() {
    let dataMessage = {
        idMessage: $("#idMessage").val(),
        messageText: $("#textMessage").val(),
        ortopedic: {id:+$("#ortopedicId").val()},
        client: {idClient:+$("#clientId").val()},
    };

    let dataToSend = JSON.stringify(dataMessage);
    $.ajax({
        //url: "http://localhost:80/api/Message/update", 
        url: "http://140.238.190.155:80/api/Message/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON; charset=utf-8",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultMessage").empty();
            $("#textMessage").val("");
            $("#idMessage").val("");
            $("#ortopedicId").val("");
            $("#clientId").val("");
            alert("Se ha actualizado la informacion");
            getMessage();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible editar la informacion.!!!");
        }
    });
}

function deleteMessage(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        //url: "http://localhost:80/api/Message/" + idElemento,
        url: "http://140.238.190.155:80/api/Message/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",

        success: function (respuesta) {
            $("#resultMessage").empty();
            $("#textMessage").val("");
            $("#idMessage").val("");
            $("#ortopedicId").val("");
            $("#clientId").val(""); 
            getMessage();
            alert("Se ha eliminado el elemento")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al tratar de eliminar !!!")
        }
    });
}


//RESERVATION

function saveReservation() {
    let dataReservation = {
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        ortopedic: {id:+$("#ortopedicReser").val()},
        client: {idClient:+$("#clientReser").val()},
    };

    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(dataReservation),
        //url: "http://localhost:80/api/Reservation/save",
        url: "http://140.238.190.155:80/api/Reservation/save",
        success: function (response) {
            $("#resultReservation").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#idReservation").val("");
            alert("Se ha guardado la informacion")
            getReservation();

        },

        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible guardar la informacion.!!!");
        }
    });

}

function getReservation() {
    $.ajax({
        //url: "http://localhost:80/api/Reservation/all",
        url: "http://140.238.190.155:80/api/Reservation/all",
        type: "GET",
        datatype: "JSON",
        success: function (respuesta) {
            console.log(respuesta);
            printReservation(respuesta);

        },
        error: function (jqXHR, textStatus, errorThrown) {
            window.location.reload()
            alert("Error al traer la informacion.!!!");
        },
    });
}


function printReservation(items){
    let myTable = '<div class="container"><div class="row">';
    for(i=0;i<items.length;i++){
        myTable+=`
        <div class="card bg-light mb-3" style="max-width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">Reserva: ${items[i].idReservation}</h5>
                <p class="card-text">Ortesis: ${items[i].ortopedic.name}</p>
                <h6 class="card-subtitle mb-2 text-muted">Inicio: ${items[i].startDate}</h6>
                <p class="card-text">Fin: ${items[i].devolutionDate}</p>
                <p class="card-text">Cliente: ${items[i].client.name}</p>
                <h6 class="card-subtitle mb-2 text-muted">Status: ${items[i].status}</h6>
                <button class="btn btn-danger" onclick="deleteReservation(${items[i].idReservation})">Borrar</button>
                <button class="btn btn-link" onclick="getItemReservation(${items[i].idReservation})">Cargar</button>                
            </div>
        </div>
        `
    }
    myTable+="</div></div>";
    $("#resultReservation").html(myTable);
}

function getItemReservation(idItem) {
    $.ajax({
        //url: "http://localhost:80/api/Reservation/" + idItem, 
        url: "http://140.238.190.155:80/api/Reservation/" + idItem,
        dataType: 'JSON',
        type: 'GET',
        success: function (response) {
            console.log(response);
            var item = response;
            $("#idReservation").val(item.idReservation);
            $("#startDate").val(item.startDate);
            $("#devolutionDate").val(item.devolutionDate);
            alert("Informacion lista para ser editada")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            //window.location.reload()
            alert("Error al cargar la informacion.!!!");
        }
    });
}

function updateReservation() {
    let dataReservation = {
        idReservation: $("#idReservation").val(),
        startDate: $("#startDate").val(),
        devolutionDate: $("#devolutionDate").val(),
        status: $("#status").val(),
        ortopedic: {id:+$("#ortopedicReser").val()},
        client: {idClient:+$("#clientReser").val()},
    };

    let dataToSend = JSON.stringify(dataReservation);
    $.ajax({
        //url: "http://localhost:80/api/Reservation/update",
        url: "http://140.238.190.155:80/api/Reservation/update",
        type: "PUT",
        data: dataToSend,
        contentType: "application/JSON; charset=utf-8",
        datatype: "JSON",
        success: function (respuesta) {
            $("#resultReservation").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#idReservation").val("");
            alert("Se ha actualizado la informacion");
            getReservation();
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("No fue posible editar la informacion.!!!");
        }
    });
}


function deleteReservation(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataToSend = JSON.stringify(myData);
    $.ajax({
        //url: "http://localhost:80/api/Reservation/" + idElemento, 
        url: "http://140.238.190.155:80/api/Reservation/" + idElemento,
        type: "DELETE",
        data: dataToSend,
        contentType: "application/JSON",
        datatype: "JSON",

        success: function (respuesta) {
            $("#resultReservation").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#idReservation").val("");
            getReservation();
            alert("Se ha eliminado el elemento")
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert("Error al tratar de eliminar !!!")
        }
    });
}
