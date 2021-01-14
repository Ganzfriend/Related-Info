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
        paddingBottom: 10,
        borderRadius: '8px',
        variant: 'rgb(255, 0, 0) dashed',
      },
      content: {
        marginLeft: 5,
        maxWidth: 300,
      },
      media: {
        height: 200,
        width: 300,
        marginBottom: 10,
        borderRadius: '8px',
      },
      price: {
        fontWeight: 'bold',
      },
    }
  );
};

export default styles;
