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
        marginBottom: 30,
        position: 'relative',
      },
      relatedInfoArrow: {
        boxShadow: 'rgba(0, 0, 0, 0) 0px 0px 0px 1px, rgba(0, 0, 0, 0) 0px 0px 0px 3px, rgba(0, 0, 0, 0.12) 0px 4px 10px 0px',
        borderRadius: '50%',
        height: 40,
        width: 40,
      },
      relatedInfoBullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      relatedInfoCard: {
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
        top: '2%',
        left: '85%',
      },
      carouselButtonGroup2: {
        position: 'absolute',
        top: '39%',
        left: '85%',
      },
      cities: {
        textDecoration: 'none',
        // color: 'inherit',
        fontFamily: 'inherit',
      },
      cityList: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingBottom: 100,
      },
      cityListAnchor: {
        textDecoration: 'none',
      },
      relatedInfoContent: {
        maxWidth: 310,
        padding: 10,
      },
      relatedInfoCardDescription: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
      relatedInfoHeart: {
        display: 'inline-block',
        filter: 'invert(1) saturate(15) hue-rotate(180deg)',
        position: 'absolute',
        top: 7,
        right: 7,
      },
      homeSlider: {
        marginBottom: 30,
        position: 'relative',
      },
      relatedInfo: {
        padding: '10px 10% 0 10%',
        position: 'relative',
        backgroundColor: '#F7F7F7',
      },
      relatedInfoliked: {
        filter: 'none',
        color: 'red',
      },
      relatedInfoMedia: {
        height: 220,
        width: '100%',
        borderRadius: '8px',
        position: 'relative',
      },
      relatedInfoPrice: {
        fontWeight: 'bold',
        marginRight: 4,
      },
      relatedInfoPriceBox: {
        display: 'flex',
        alignItems: 'center',
      },
      relatedInfoReviewsBox: {
        display: 'flex',
        alignItems: 'center',
      },
      relatedInfoSkeleton: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 20,
      },
      relatedInfoSuperhost: {
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
