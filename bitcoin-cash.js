(function(util){
    window.onload = function() {
        console.log('bitcoin-cash carregado');

        var _reais, _quantidade, _unitario;
        
        carregado(() => {

            adicionarCampo();

            _reais      = util.query('#id_volume_real');
            _quantidade = util.query('#id_volume');
            _unitario   = util.query('#id_preco_unitario');

            _reais.addEventListener('keyup', calcularVolumeLitecoin);
            _unitario.addEventListener('keyup', calcularVolumeLitecoin);    
        })
        
        function calcularVolumeLitecoin(){
            var reais = util.getFloatValue(_reais);
            var unidade = util.getFloatValue(_unitario);
        
            if(reais && unidade){
                var volume = reais / unidade;
                util.setFloatValue(_quantidade, volume, 'keyup');
            }
        }

        function adicionarCampo() {
            var tpl = document.createElement('div');
            
            tpl.innerHTML = `
                <small><label for="id_volume_real">Valor em reais</label></small>
                <input autocomplete="off" maxlength="14" placeholder="Valor em reais" type="text" id="id_volume_real">
            `;

            util.query('#bcash-compra-form').prepend(tpl);
        }

        function carregado(callback) {
            var teste = util.query('#id_volume');
            
            if(teste == null)
                setTimeout(() => carregado(callback), 100);
            else
                callback();
        }
    }
})(mbexUtil)


