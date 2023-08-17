import React,{useEffect,useState} from 'react'
import axios from 'axios';
import { server } from '../main';
import { Container, HStack, Heading, VStack,Image,Text } from '@chakra-ui/react';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

const Exchanges = () => {
const [exchanges, setExchanges] = useState([]);
const [loading, setLoading] = useState(true);                    
const [error, setError] = useState(false);                    

  useEffect(() => {
    const fetchExchanges= async() => {
    try {
      const {data}=await axios.get(`${server}/exchanges` );
      setExchanges(data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
    };
    fetchExchanges()
  }, []);
  
  if(error) return <ErrorComponent message={"Error While Fetching Exchanges"}/>

  return (
    <Container maxW={'container.xl'}>
      {loading? ( 
        <Loader/>
      ) :(
        <>
          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {exchanges.map((i) => (
              <ExchangeCard 
                key={i.id}
                name={i.name}
                img={i.image}
                rank={i.trust_score_rank}
                url={i.url}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};
 
const ExchangeCard=({name,img,rank,url})=>(
  // target=blank se no extra tab open
  <a href={url} target={'blank'}>
    <VStack w={"32"} shadow={"lg"} p={"8"} m={"9"}  borderRadius={"lg"} transition={"all 0.3s"} 
    css={{
      "&:hover":{
        transform:"scale(1.1)"
      }
    }}
    >
      <Image 
        src={img} 
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={'Exchange'} 
        css={{
          transition: 'transform 0.3s', // Add a transition effect
          "&:hover": {
            transform: 'scale(1.3)', // Enlarge the image on hover
          }
        }}
      />

      {/* noofLines ye lambi line ko... mai krega */}
      <Heading size={'mid'} noOfLines={1}>
        {rank}
      </Heading>

      <Text noOfLines={1} 
        css={{
          transition: 'transform 0.3s',
          "&:hover": {
            whiteSpace: 'normal', // Allow text to wrap
            overflow: 'visible', // Display overflowing content
            transform:'scale(1.1)', 
          }
        }}
      >{name}</Text>

    </VStack>
  </a>
);  

export default Exchanges