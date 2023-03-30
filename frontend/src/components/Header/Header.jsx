
import {AppBar, Toolbar, Box, styled, Typography} from '@mui/material';
import CustomButtons from './CustomButtons';
import Search from './Search';


const StyleHeader = styled(AppBar)`
    background: #000000;
    height: 55px;
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 1;
`

const Subheading = styled(Box)`
    font-size: 12px;
    font-style: italic;
`

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (
        <StyleHeader>
            <Toolbar style={{minHeight:'55px'}}>
                <Component>
                    <img src={logoURL} alt='logo' style={{width:75}}/>
                    <Box style={{display:'flex'}}>
                        <Subheading>Explore 
                            <Box component='span' style={{color: 'yellow'}}>Plus</Box>
                            </Subheading>
                            <PlusImage src={subURL} alt='+ logo'/>
                    </Box>
                </Component>
                <Search />
                <CustomButtonWrapper>
                    <CustomButtons />
                </CustomButtonWrapper>
            </Toolbar>
        </StyleHeader>
    )
}

export default Header;