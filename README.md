# Ferramentas

Calculadoras e guias de uso pessoal, publicados como um site estático em
[emanuel36.github.io/ferramentas](https://emanuel36.github.io/ferramentas/). Tudo roda no
navegador: não há servidor nem conta.

## Ferramentas

| Ferramenta | O que faz | Abrir |
|---|---|---|
| **Financiamento** | Simula financiamento imobiliário em SAC e Price, compara com investir o dinheiro e compara imóveis. | [abrir](https://emanuel36.github.io/ferramentas/financiamento/) |
| **IR ETF** | Calcula o imposto de renda na venda de cotas de ETF, com busca da cotação atual. | [abrir](https://emanuel36.github.io/ferramentas/ir-etf/) |
| **Roteiro de viagem** | Guia de bolso de uma viagem, pronto para imprimir. | [abrir](https://emanuel36.github.io/ferramentas/roteiro-viagem/) |

O endereço principal abre uma página com uma prévia de cada ferramenta para escolher.

## Organização

```
ferramentas/
├── financiamento/    simulador de financiamento
├── ir-etf/           calculadora de IR para ETF
└── roteiro-viagem/   guia de viagem e versão em PDF
```

O site é publicado automaticamente a cada atualização deste repositório.

## Como usar

- **Acesso:** abra o endereço do site em qualquer navegador, inclusive no celular. Cada
  ferramenta também funciona abrindo o arquivo `index.html` da pasta direto no navegador.
- **Dados salvos:** o que você digita fica guardado só no navegador em que você usou a
  ferramenta. Nada é enviado para o site. Outro navegador ou outro aparelho começa vazio.
- **Cotação automática:** o IR ETF busca o preço na [brapi.dev](https://brapi.dev), que exige
  um token gratuito. Informe o token no campo da própria página; ele fica salvo só no seu
  navegador. Sem token, digite o preço à mão.
