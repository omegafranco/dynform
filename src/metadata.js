const meta = {
	"fields": [{
		"type": "simplefield",
		"width": 12,
		"parameters": {
			"label": "Nome",
			"fieldname": "nome"
		}
	}, {
		"type": "simplefield",
		"width": 12,
		"parameters": {
			"label": "Email",
			"fieldname": "email"
		}
	}, {
		"type": "simplefield",
		"width": 12,
		"parameters": {
			"label": "Endereço",
			"fieldname": "endereco"
		}
	}, {
		"type": "simplefield",
		"width": 4,
		"parameters": {
			"label": "CEP",
			"fieldname": "cep"
		}
	},{
		"type": "simpleselect",
		"width": 4,
		"parameters": {
			"label": "Estado",
			"fieldname": "estado",
			"options": [{
				"value": "MG",
				"label": "Minas Gerais"
			}, {
				"value": "RJ",
				"label": "Rio de Janeiro"
			}],
			"optionsUrl": "http://localhost:5000/estados"
		}
	}, {
		"type": "simpleselect",
		"width": 4,
		"parameters": {
			"label": "País",
			"fieldname": "pais",
			"options": [ {
				"value": "AL",
				"label": "Albania"
			},{
				"value": "BR",
				"label": "Brasil"
			}],
			"optionsUrl": "http://localhost:5000/paises"
		}
	} ],
	"source" : "http://localhost:5000/registros"
};

export default meta;