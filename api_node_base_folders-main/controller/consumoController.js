const {Consumo} = require("../models"); 

const consumoController = {

    getAllConsumos:async (req, res) => {
        console.log("prrra");
        try {
            const consumos = await Consumo.findAll();

            if(!consumos || consumos.length === 0){
                res.status(200).json({message: "No existen consumos de energía"}); 
            }
            return res.status(200).json(consumos); 
        } catch (err) {
            res.status(500).json({message: err.message});
        }
    },   

    getConsumo:async (req, res)=>{

        const {id} = req.params;

        try{
            const consumo = await Consumo.findByPk(id);

            if(!consumo){
                return res.status(404).json({error: `No existe el consumo con id ${id}`})
            }
            return res.json(consumo);
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    },

    addConsumo:async (req, res) => { 
        try {
            const{usuario, consumo_kwh, tarifa} = req.body;

            if(usuario && consumo_kwh && tarifa){
                const total = consumo_kwh * tarifa 
                const consumo = await Consumo.create({
                    usuario_id: usuario,
                    consumo_kwh: consumo_kwh,
                    tarifa:tarifa,
                    total: total
                });

                
                return res.status(201).json({message:"Consumo añadido",consumo:consumo}); 
            }  
            return res.status(400).json({Error:`Complete los campos correctamente`});

        } catch (err) {
            res.status(500).json({Error: err.message});
        }
    },

    updateConsumo:async (req, res) => {
        try {
            const{id} = req.params;
            const{tarifa, consumo_kwh} = req.body;
            const consumo = await Consumo.findByPk(id);

            if(!consumo){
                return res.status(404).json({message: 'User not found'});
            }

            if(!tarifa || ! consumo_kwh){                
                return res.status(400).json({Error:`Complete los campos correctamente`});   
            }

            consumo.consumo_kwh = consumo_kwh;
            consumo.tarifa = tarifa;
            consumo.total = consumo_kwh*tarifa;

            await consumo.save();
            return res.status(200).json({message: 'Consumo actualizado',  conusmo: consumo});

        }catch (err) {
            res.status(500).json({message: err.message});
        }
    },

    removeConsumo:async (req, res) => {

        const {id} = req.params;

        try{
            const consumo = await Consumo.findByPk(id);

            if(!consumo){
                return res.status(404).json({error: `No existe el consumo con id ${id}`})
            }
            //Consumo.destroy(consumo);
            return res.status(200).json({message: "Consumo eliminado"});
        }catch(error){
            return res.status(500).json({error: error.message})
        }
    }
}

module.exports = consumoController
