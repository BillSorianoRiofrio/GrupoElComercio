
	// Variable Global
	var aCargarDatos = new Array(); // Arreglo que carga datos

	//-----------------------------------------
	// Función para cargar los datos en arreglo 
	//-----------------------------------------
	function fCargarDatos()
	{
		var sCargarDatos = "";

		// Cargar valores de los campos en arreglo
		var obj = document.forms[0];
		aCargarDatos[0] = obj.fld1.value;
		aCargarDatos[1] = obj.fld2.value;
		aCargarDatos[2] = obj.fld3.value;
		aCargarDatos[3] = obj.fld4.value;
		aCargarDatos[4] = obj.fld5.value;
		aCargarDatos[5] = obj.fld6.value;
		aCargarDatos[6] = obj.fld7.value;
		aCargarDatos[7] = obj.fld8.value;
		aCargarDatos[8] = obj.fld9.value;

		// Recorrer arreglo para mostrar los números ingresados en la página
		for (var i = 0; i < aCargarDatos.length; i++)
		{	// Concatenamos los datos en el orden ingresado
			if(i==0)
			{	
				sCargarDatos = aCargarDatos[i];
			}
			else
			{
				sCargarDatos = sCargarDatos + "  " + aCargarDatos[i];
			}
		};	
		//alert("Los números ingresados son: " + sCargarDatos);
		// Mostrar los datos en la zona correspondiente
		//$('#msjDatos').html("Los datos cargados son: " + sCargarDatos);

	}


	//------------------------------------------
	// Función para ordenar los datos en arreglo 
	//------------------------------------------
	function fOrdenarDatos()
	{
		// Identificar variables
		var sOrdenarDatos = "";
		var sAux = 0;

		// Invocar a la función cargar datos ingresados en las casillas
		fCargarDatos();

		// Invocar a la función cargar datos ingresados en las casillas
		if (fValidarDatos()==false){
			document.getElementById('msjDatos').innerHTML="";
			sAux = 1;
		}else{
			// Invocar a la función duplicar datos ingresados en las casillas
			if (fValidarDatosDuplicados()==false){
				document.getElementById('msjDatos').innerHTML="";
				sAux = 1;
			}
		}

		// Si todo es correcto continuamos con la carga y ordenamiento
		if (sAux==0){
		
			// Método para ordenar el arreglo de datos 
			aCargarDatos.sort(function(a, b){return a-b});

			// Recorrer arreglo para mostrar los números ordenados en la página
			for (var i = 0; i < aCargarDatos.length; i++)
			{	// Concatenamos los datos en el orden ingresado
				if(i==0)
				{	
					sOrdenarDatos = aCargarDatos[i];
				}
				else
				{
					sOrdenarDatos = sOrdenarDatos + "  " + aCargarDatos[i];
				}
			};	
			//alert("Los números ordenados son: " + sOrdenarDatos);
			document.getElementById('msjDatos').innerHTML="Ordenamiento ascendente: " + sOrdenarDatos;

		}

	}


	//---------------------------
	// Función para validar datos
	//---------------------------
	function fValidarDatos()
	{	

		for (var i = 0; i < aCargarDatos.length; i++)
		{	
			var nCasilla = i + 1;
			var sCampo = "fld" + nCasilla;
			// Validar que todos los campos esten llenos
			with(document.forms[0]) {
				if(elements[ sCampo ].value==""){
					alert("Por favor ingresé un número entero en la casilla " + nCasilla);
					elements[ sCampo ].focus();
					return false;
				}
			}	

			// Validar que todos los campos sean números enteros
			with(document.forms[0]) {
				if(isNaN(elements[ sCampo ].value)){
					alert("Usted debe ingresar un número entero en la casilla " + nCasilla);
					elements[ sCampo ].focus();
					return false;
				}
			}

		}

		return true;

	}


	//-------------------------------------
	// Función para validar datos por campo
	//-------------------------------------
	function fValidarDatosPorCampo(sCampo, nCasilla)
	{	

		// Validar que todos los campos sean números enteros
		with(document.forms[0]) {
			if(isNaN(elements[ sCampo ].value) && elements[ sCampo ].value!=""){
				alert("Usted debe ingresar un número entero en la casilla " + nCasilla);
				elements[ sCampo ].focus();
				elements[ sCampo ].value = "";	
				return false;
			}

			if(elements[ sCampo ].value==" " || elements[ sCampo ].value=="'"){
				alert("Usted debe ingresar un dato correcto en la casilla " + nCasilla);
				elements[ sCampo ].focus();
				elements[ sCampo ].value = "";	
				return false;
			}
		}


		return true;

	}


	//--------------------------------------
	// Función para validar datos duplicados
	//--------------------------------------
	function fValidarDatosDuplicados()
	{
		// Variable para saber si hay duplicados (igual a cero), sino hay duplicados (igual a uno)
		//var sDuplicado = 0; 
		for (var i = 0; i < aCargarDatos.length; i++)
		{	
			// Recorrer el arreglo solo si la variable duplicado es igual a cero
			//for (var j = 0; j < aCargarDatos.length && sDuplicado==0; j++)
			for (var j = 0; j < aCargarDatos.length; j++)
			{	

				if (i!=j){
					if (aCargarDatos[i]==aCargarDatos[j]){
						// Variables de casillas duplicadas
						var sCasillaDuplicada1 = i+1;
						var sCasillaDuplicada2 = j+1;
						alert("Usted no puede duplicar el número entero de la casilla " + sCasillaDuplicada1 + " con la casilla " + sCasillaDuplicada2 );
						// Cambiar la variable de duplicado igual a uno, para evitar
						//sDuplicado = 1;
						//break;
						return false;
					}
				}
				
			};
		};

		return true;	
	}


	//---------------------
	// Función para limpiar 
	//---------------------
	function fLimpiar()
	{
		document.getElementById('msjDatos').innerHTML="";
	}
