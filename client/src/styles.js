/* eslint-disable-next-line arrow-body-style */
const styles = ({ spacing, palette, breakpoints }) => {
  // const primary1 = ;
  return (
    {
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      card: {
        margin: 15,
        borderRadius: '8px',
        variant: 'rgb(255, 0, 0) dashed',
      },
      container: {
        marginLeft: 120,
        marginRight: 120,
        // position: 'relative',
      },
      content: {
        maxWidth: 310,
        padding: 10,
      },
      description: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      heart: {
        display: 'inline-block',
        filter: 'invert(1) saturate(15) hue-rotate(180deg)',
        position: 'absolute',
        top: 7,
        right: 7,
      },
      leftArrow: {
        display: 'block',
        background: 'lightgray',
      },
      liked: {
        filter: 'none',
        color: 'red',
      },
      media: {
        height: 220,
        width: '100%',
        borderRadius: '8px',
        position: 'relative',
      },
      price: {
        fontWeight: 'bold',
        marginRight: 4,
      },
      priceBox: {
        display: 'flex',
        alignItems: 'center',
      },
      reviewsBox: {
        display: 'flex',
        alignItems: 'center',
      },
      rightArrow: {
        display: 'block',
        background: 'black',
      },
      root: {
        marginBottom: 50,
      },
      dotBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      dots: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      superhost: {
        display: 'inline-block',
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 6,
        padding: '7px 8px',
        position: 'absolute',
        top: 7,
        left: 7,
      },
      typeNumBedsBox: {
        display: 'flex',
        alignItems: 'center',
      },
    }
  );
};

export default styles;
