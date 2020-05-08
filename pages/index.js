import {
    CenterFlex,
    Heading,
    VertSpace,
    Wrapper
} from 'groy';
import Button from '../components/button';
import Header from '../components/header';
import Head from '../utils/headLinks';
import Link from 'next/link';

const Home = () => (
    <>
        <Head />
        <Header />
        <Wrapper>
            <CenterFlex>
                <div>
                    <VertSpace />
                    <Heading>Groy Design System</Heading>
                    <CenterFlex>
                        <Heading size="3">This is going too far</Heading>
                    </CenterFlex>
                    <VertSpace />
                    <CenterFlex>
                        <Button to="/components">Let's get started</Button>
                    </CenterFlex>
                </div>
            </CenterFlex>
        </Wrapper>
    </>
);

export default Home;
