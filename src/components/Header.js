import React from "react";

const styles = {
    headerDiv: {
        backgroundColor: "royal",
        borderBottom: "2px red solid"
    },
    h1: {
        textAlign: "center",
        color: "white"
    },
    subtitle: {
        textAlign: "center",
        color: "white"
    }
}
function Header() {
    return (
        <div style={styles.headerDiv}>
            <h1 style={styles.h1}>Employee Directory</h1>
            <p style={styles.subtitle}> Click on carrots to filter by heading or use the search box to narrow your results.</p>
        </div>
    )
}

export default Header;