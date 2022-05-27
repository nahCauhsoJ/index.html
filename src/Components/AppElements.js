import styled from 'styled-components';

export const Background = styled.div`
position: absolute;
background: ${p => p.theme.color.background};
width: 100%;
min-height: 100%;
`
export const Content = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  margin-top: -20px;
`

export const Title = styled.h1`
  color: ${p => p.theme.color.text}
`

// properties: darker, bold
export const Text = styled.p`
  color: ${p => p.darker ? p.theme.color.dark_text : p.theme.color.text};
  font-size: ${p => p.fontSize};
  font-weight: ${p => p.bold ? "bold" : "normal"};
`
export const SpanText = Text.withComponent("span");