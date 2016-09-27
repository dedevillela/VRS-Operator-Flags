# VRS-Operator-Flags [![Awesome]
(https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/sindresorhus/awesome)

Custom operator flags for [Virtual Radar Server](https://www.virtualradarserver.co.uk "Virtual Radar Server's Homepage") (a.k.a. VRS).
> *Bandeiras de operadores personalizadas para o [Virtual Radar Server](https://www.virtualradarserver.co.uk "Página do Virtual Radar Server").*

##Prerequisites (Pré-Requisitos)
- VRS installed and running, with the [Custom Content Plugin](http://www.virtualradarserver.co.uk/documentation/CustomContent/Default.aspx "Custom Content Plugin") also installed and enabled.
 
> *VRS instalado e rodando, com o [Custom Content Plugin](http://www.virtualradarserver.co.uk/documentation/CustomContent/Default.aspx "Custom Content Plugin") também instalado e habilitado.*

##Instructions (Instruções)

- Clone or download the repo into a directory on the machine where VRS is running. Ensure you do not place the files under the Virtual Radar Server directory, since they could be overwritten on upgrades.
 
> *Clone ou baixe o repositório em um diretório na máquina onde está rodando o VRS. Certifique-se de não colocar os arquivos no diretório "Virtual Radar Server", uma vez que eles podem ser sobrescritos em atualizações.*

- Copy the desired files contained in the 'OperatorFlags' folder you've just downloaded, and paste them in your VRS 'Operator Flags' folder configured under the Tools/Options/Data Sources tab.
 
> *Copie os arquivos contidos na pasta 'OperatorFlags' que você acabou de baixar, e cole-os na sua pasta "Operator Flags" configurada pela aba em Ferramentas/Opções/Fontes de Dados no VRS.*

- With the Custom Content Plugin enabled on VRS, go to "Tools>Plugins..." and press the "Options" button. Then fill in the field "Inject file:" with absolute path to you local file "CustomOperatorFlags.html", set it to "END of HEAD", with and asterisk (*) characther on the "Address:" field, and check "Enabled" to activate the plugin. Press the "OK" button, then the "Close" button.
 
> *Com o Custom Content Plugin habilitado no VRS, vá até "Ferramentas>Plugins..." e pressione o botão "Opções". Então preencha o campo "Inserir arquivo:" com o caminho absoluto para seu arquivo local "CustomOperatorFlags.html", em "END of HEAD", com um caractere asterisco no campo "Endereço:", e marque "Habilitado" para ativar o plugin. Pressione o botão "Ok", e depois o botão "Fechar".*

- Clear your browser cache. 
 
> *Limpe o cache do seu navegador.*

- Enjoy!
 
> *Aproveite!*

##Contributions (Contribuições)

Feel free to download and share these files, suggest corrections, or send requests for more operator flags, as I'm constantly updating this repository with new custom flags.

> *Sinta-se livre para baixar e compartilhar esses arquivos, sugerir correções, ou enviar pedidos para mais bandeiras de operadores, pois irei atualizar constantemente este repositório com novas bandeiras personalizadas.*
