import BasicExample from "../Componentes/BasicExample";

function Home() {

    const url = "http://ffsgestaocondominial.com.br/wp-content/uploads/2017/06/a-empresa-ffs-administracao-condominial.jpg";

    const url2 = "http://ffsgestaocondominial.com.br/wp-content/uploads/2019/06/Fabiana.jpg";

    const url3 = "http://ffsgestaocondominial.com.br/wp-content/uploads/2019/06/C%C3%A9sar-300x300.jpg";

    return(
        <div>
            <BasicExample/>
            <h1>A Empresa</h1>
            
            <div className="emprexa">
                <p>Para a FFS Gestão Condominial administrar um condomínio é muito mais do que arrecadar e pagar contas. É conciliar pessoas, proporcionar lazer, resolver conflitos e valorizar o patrimônio de todos.</p>
                <p2>Nos condomínios em que atuamos frequentemente nós trazemos diversas atividades para os moradores com a finalidade de promover a integração e o bem estar em família. Dentre as atividades estão: Os Food Trucks do pastel e caldo de cana, as feira livres semanais de frutas e verduras frescas com produtos orgânicos, os eventos de queijos da serra da canastra e vinhos chilenos, os eventos empreendedores para promover as atividades dos próprios moradores e muito mais.
                Nós acreditamos na administração humanizada e com muito trabalho e dedicação queremos transformar o seu condomínio em um espaço de convivência e lazer para toda a sua família.</p2>
                <img src={url} alt="Imagem" />
            </div>
            <div className="fabi">
                <h1>Fabiana Santos</h1>
                <p>Por trás da FFS Gestão Condominial está a administradora de empresas Fabiana Santos que atuou 19 anos na área. Fabiana é certificada pelo <a href="https://www.sindico5estrelas.com/perfil-sindicos.php?id=7">Sindico 5 Estrelas</a>, possui MBA em gestão empresarial, controladoria e formou-se como síndica profissional pela Gabor RH e Escola Paulista de Direito com curso reconhecido pelo CRA-SP com todos os módulos concluídos.

                Realizou também os cursos das normas regulamentadoras NR 16280 de reforma em edificações na ABNT, mediação e arbitragem condominial realizados na GARBOR RH.
                <img src={url2} alt="Imagem" />
                </p>
            </div>

            <div className="cesar">
                <h1>Cesar Alberto</h1>
                <p>
                César Alberto é síndico profissional e sócio da FFS Gestão Condominial. Sua gestão é transparente e focada em resolver conflitos para o condomínio.
                <ul>
                    <li>Foco na gestão operacional dos empreendimentos.</li>
                    <li>Relacionamento com gestor predial, apoio nas demandas do empreendimento</li>
                    <li>Suporte operacional com vistoria técnica, plano diretor de manutenções.</li>
                </ul>
                <img src={url3} alt="Imagem" />
                </p>
            </div>

            <p>Traga seu condomínio para a FFS Gestão Condominial e passe a desfrutar do que há de melhor em gestão de condomínios.</p>
        </div>
    )
}

export default Home