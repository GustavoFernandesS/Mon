import BasicExample from "../Componentes/BasicExample"

function Administradores (){
    return(
        <div>
            <BasicExample/>
            <div>
                <div><h1>ADMINISTRAÇÃO DE CONDOMÍNIOS RESIDENCIAIS E COMERCIAIS</h1></div>
                <div>Os moradores dos condomínios administrados pela <strong>FFS Gestão Condominial</strong> dispõem de todas as soluções administrativas e financeiras, resolvidas de forma rápida e prática.</div>
                <div>Sabemos o quanto é importante ter profissionais qualificados resolvendo os problemas e agregando valor ao imóvel.</div>
            </div>

            <div>
                <div>SERVIÇOS OFERECIDOS</div>
                <div className="lista1">
                    <ul>
                        <li>SÍNDICO PROFISSIONAL QUALIFICADO.</li>
                        <li>ASSESSORIA PARA SÍNDICOS MORADORES.</li>
                        <li>CONTROLE DAS PREVISÕES ORÇAMENTÁRIAS, COTAÇÕES DE PREÇOS, COBRANÇAS E PRESTAÇÕES DE CONTAS DO CONDOMÍNIO.</li>
                    </ul>
                </div>
                <div className="lista2">
                    <ul>
                        <li>ASSESSORIA CONTÁBIL E FINANCEIRA.</li>
                        <li>COBRANÇA DE INADIMPLENTES.</li>
                        <li>DEPARTAMENTO PESSOAL E FINANCEIRO.</li>
                    </ul>
                </div>
                <div className="lista3">
                    <ul>
                        <li>ASSISTÊNCIA ÀS ASSEMBLEIAS.</li>
                        <li>ASSESSORIA JURÍDICA.</li>
                        <li>ADMINISTRAÇÃO DA MÃO DE OBRA.</li>
                    </ul>
                </div>

                <div>
                    <p>Traga seu condomínio para a <strong>FFS Gestão Condominial</strong> e passe a desfrutar do que há de melhor em gestão de condomínios.</p>
                </div>
            </div>

            <div>
                <div>
                    <h1>SOLICITE UMA PROPOSTA</h1>
                </div>
                <div>
                    <h1>Proposta</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Administradores