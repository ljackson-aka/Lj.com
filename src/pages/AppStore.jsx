const AppStore = () => {
    return (
      <div style={styles.container}>
        <h1>App Store</h1>
        <p>Explore and download my latest applications.</p>
      </div>
    );
  };
  
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      paddingTop: "160px", // Matches Home and Resume pages
    },
  };
  
  export default AppStore;
  