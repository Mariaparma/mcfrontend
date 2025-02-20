import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import  Footer from "../components/Footer";
import Section from "../components/Section";
export default function Home(){
    return (
        <div className={styles.container}>
         <Header/>
        <h1>teste</h1>
        <Section/>
        <Footer/>
        </div>
        
    );
}