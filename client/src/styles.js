/* eslint-disable-next-line arrow-body-style */
const styles = ({ spacing, palette, breakpoints }) => {
  return (
    {
      activityCard: {
        margin: 15,
        borderRadius: '8px',
        variant: 'rgb(255, 0, 0) dashed',
      },
      activityMedia: {
        height: 320,
        width: '100%',
        borderRadius: '8px',
        position: 'relative',
      },
      activitySlider: {
        marginBottom: 50,
      },
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
      cardSkeletons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
      },
      carouselButtonGroup: {
        position: 'absolute',
      },
      cities: {
        // fontSize: 18,
      },
      cityList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 100,
      },
      // cityListSkeletons: {
      //   display: 'flex',
      //   flexDirection: 'row',
      //   justifyContent: 'center',
      // },
      container: {
        marginLeft: 120,
        marginRight: 120,
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
      root: {
        marginBottom: 50,
        position: 'relative',
      },
      skeleton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
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
