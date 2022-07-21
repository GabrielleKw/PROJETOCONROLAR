
// Menu lateral com transição para as páginas
const nav = document.querySelector(".itens-menu"), 
    navList = nav.querySelectorAll("li"), 
    totalNavList =  navList.length, 
    allSection = document.querySelectorAll(".section"), 
    totalSection = allSection.length;

for(let i=0; i < totalNavList; i++){
    const a = navList[i].querySelector("a"); 
    console.log(a)
    a.addEventListener("click", function(){
        
        //Removendo a classe back-ection
        for (let i=0; i < totalSection; i++){
            allSection[i].classList.remove("back-section");
        }

        for(let j=0; j<totalNavList; j++){

            if(navList[j].querySelector("a").classList.contains("active")){
                // Adicionando a classe back-section
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active"); 
        
        }
        this.classList.add("active");
        showSection(this);

        //Para quando selecionado um botão do menu lateral, o mini-menu feche automaticamente
        if(window.innerWidth < 1200){
            lateralSectionBtn();
        }
    })
}

function showSection(element){

    for (let i=0; i < totalSection; i++){
        allSection[i].classList.remove("active");
    }

    const target = element.getAttribute("href").split("#")[1];
          console.log(target)  
          document.querySelector("#" + target).classList.add("active")
}   


// Mini Menu responsivo

const miniMenu = document.querySelector(".mini-menu-button"), 
      lateral = document.querySelector(".lateral");

miniMenu.addEventListener("click", lateralSectionBtn)

function  lateralSectionBtn(){
    lateral.classList.toggle("open");
    miniMenu.classList.toggle("open");
    
    for (let i=0; i < totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}


// BOTÃO CALCULAR 
 botao = document.querySelector("#botaoCalcular")

const VerificacaoPressao = () => {

    // Coleta valor dos inputs
    const valorPressao = document.getElementById('valorPressao').value;
    

    if ( valorPressao  === 120.60) {

    }
    else if (valorPressao < 120.60) {

    }
    else if (valorPressao > 130.85 && valorPressao < 139.89) {

    }
    else if (valorPressao >= 140.90 && valorPressao <= 159.99) {

    }
    else if (valorPressao >= 160.100 && valorPressao < 180.110){

    }else if (valorPressao >= 180.110){

    }
    else {

    }
}




botao.addEventListener("click", VerificacaoPressao)

botao__jejum.onclick = function () {

    escolha__jejum = jejum.value

    switch(escolha__jejum) {
        case 'jejumSim':
            jejum == '1'
            alert('Cupom aplicado!')
            break
        case 'jejumnao':
            jejum == '2'
            alert('Cupom aplicado!')
            break
        default:
            alert('Erro')
            break
    }
}

//BOTÃO VERIFICAR GLICEMIA 
botao = document.querySelector("#botaoCalcularGlicemia")
botaoCalcularGlicemia = jejum.value

    switch(escolha__jejum) {
        case 'jejumSim':
            jejum == '1'
            alert('Cupom aplicado!')
            break
        case 'jejumnao':
            jejum == '2'
            alert('Cupom aplicado!')
            break
        default:
            alert('Erro')
            break
    }
botao.addEventListener("click", botaoCalcularGlicemia)   

// MEU LOGIN

$(function() {

	// author badge :)
	var author = '<div style="position: fixed;bottom: 0;right: 20px;background-color: #fff;box-shadow: 0 4px 8px rgba(0,0,0,.05);border-radius: 3px 3px 0 0;font-size: 12px;padding: 5px 10px;">By <a href="https://twitter.com/mhdnauvalazhar">@mhdnauvalazhar</a> &nbsp;&bull;&nbsp; <a href="https://www.buymeacoffee.com/mhdnauvalazhar">Buy me a Coffee</a></div>';
	$("body").append(author);

	$("input[type='password'][data-eye]").each(function(i) {
		var $this = $(this),
			id = 'eye-password-' + i,
			el = $('#' + id);

		$this.wrap($("<div/>", {
			style: 'position:relative',
			id: id
		}));

		$this.css({
			paddingRight: 60
		});
		$this.after($("<div/>", {
			html: 'Show',
			class: 'btn btn-primary btn-sm',
			id: 'passeye-toggle-'+i,
		}).css({
				position: 'absolute',
				right: 10,
				top: ($this.outerHeight() / 2) - 12,
				padding: '2px 7px',
				fontSize: 12,
				cursor: 'pointer',
		}));

		$this.after($("<input/>", {
			type: 'hidden',
			id: 'passeye-' + i
		}));

		var invalid_feedback = $this.parent().parent().find('.invalid-feedback');

		if(invalid_feedback.length) {
			$this.after(invalid_feedback.clone());
		}

		$this.on("keyup paste", function() {
			$("#passeye-"+i).val($(this).val());
		});
		$("#passeye-toggle-"+i).on("click", function() {
			if($this.hasClass("show")) {
				$this.attr('type', 'password');
				$this.removeClass("show");
				$(this).removeClass("btn-outline-primary");
			}else{
				$this.attr('type', 'text');
				$this.val($("#passeye-"+i).val());				
				$this.addClass("show");
				$(this).addClass("btn-outline-primary");
			}
		});
	});

	$(".my-login-validation").submit(function() {
		var form = $(this);
        if (form[0].checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
		form.addClass('was-validated');
	});
});
