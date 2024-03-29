import styled from "styled-components";

const Login = (props) => {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTALogoOne src="/images/logos.png" alt=""/>
                    <SignUp>Signup Here...</SignUp>
                    <Description>You can watch all block buster anime, cartoons, movies and exiciting TV shows here. Have unlimited fun togather with your family and friends.</Description>
                    <CTALogoTwo src="/images/cta-logo-two.png" alt=""/>
                </CTA>
                <BgImage />
            </Content>
        </Container>
    );
};

const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url("/images/login-background.jpg");
position: absolute;
top: 0;
right: 0;
left: 0;
z-index: -1; 
`;

const CTA = styled.div`
max-width: 650px;
display: flex;
flex-direction: column;
width: 100%;
`
const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 200px;
margin-left: auto;
margin-right: auto;
filter: invert(100%) brightness(100%) contrast(200%);

`

const SignUp = styled.a`
font-weight: bold;
color: white;
background-color: #0483ee;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover {
    background-color: darkgreen;
}
`
const Description = styled.p`
font-size: 12px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`
const CTALogoTwo = styled.img`
max-width: 600px;
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom;
width: 100%;
`

export default Login;