import News from '../components/News';
import { useParams } from 'react-router-dom';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import BuySellPanel from '../components/BuySellPanel';
import PriceHistoryPanel from '../components/PriceHistoryPanel';
import StockPageHeader from '../components/StockPageHeader';

const StockPage = () => {
    const params = useParams()
    const { symbol } = params

    return (
        <>
            <StockPageHeader symbol={symbol} />
            <Container maxWidth='md'>
                <PriceHistoryPanel symbol={symbol} />
                <BuySellPanel symbol={symbol} />
            </Container >
            <News />
        </>

    )
}

export default StockPage;