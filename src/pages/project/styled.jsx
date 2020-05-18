import styled from 'styled-components'

export const Content = styled.div`

`

export const PictureCover = styled.img`
  width: 100%;
`

export const Description = styled.div`
  font-size: 1.4em;
  width: 70%;
  text-align: left;
  padding: 0px 50px;
  @media screen and (max-width:800px) {
    width: 100%;
    margin-top: 80px;
  }
  @media screen and (max-width:500px) {
    padding: 0px 10px;
    margin-top: 0px;
  }
`

export const Icon = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  position: absolute;
  top: -70px;
  left: 0px;
  @media screen and (max-width:800px) {
    width: 200px;
    height: 200px;
  }
  @media screen and (max-width:500px) {
    width: 100px;
    height: 100px;
    top: -40px;
  }
`

export const Flex = styled.div`
  padding: 70px 0px;
  display: flex;
  justify-content: flex-end;
  position: relative;
  align-items: center;
  @media screen and (max-width:500px) {
    padding: 50px 0px;
  }
`

export const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

export const Figure = styled.figure`
  box-sizing: border-box;
  width: ${props => props.fullWidth ? '100%' : '50%'};
  padding: 10px;
  margin: 0px;
  @media screen and (max-width:500px) {
    width: 100%;
  }
`