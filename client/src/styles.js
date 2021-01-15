const styles = ({ spacing, palette, breakpoints }) => {
  // const primary1 = `${palette.primary.main}19`
  // const secondary1 = `${palette.secondary.main}19`
  const greyText = palette.grey[300];
  return (
    {
      root: {
        marginBottom: 12,
        display: 'flex',
        flexWrap: 'wrap',
        // height: 275,
        // width: 267,
      },
      // title: {
      //   fontSize: 14,
      // },
      bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
      },
      card: {
        margin: 15,
        // maxWidth: 310,
        paddingBottom: 10,
        borderRadius: '8px',
        variant: 'rgb(255, 0, 0) dashed',
      },
      content: {
        marginLeft: 5,
        maxWidth: 310,
      },
      description: {
        fontStyle: 'italic',
      },
      notLiked: {
        filter: 'invert(1) saturate(15) hue-rotate(180deg)',
        fontSize: 35,
        marginLeft: 280,
      },
      liked: {
        color: 'red',
        fontSize: 35,
        marginLeft: 280,
      },
      media: {
        height: 220,
        width: '100%',
        marginBottom: 10,
        borderRadius: '8px',
      },
      superhost: {
        color: 'black',
        fontWeight: 'bold',
        backgroundColor: 'white',
        border: '1px solid black',
        borderRadius: 6,
        marginLeft: 15,
        marginTop: 15,
        padding: '7px 8px',
      },
    }
  );
};

export default styles;
