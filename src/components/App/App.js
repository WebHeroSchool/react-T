import React from 'react';
import ItemList from '../ItemList/ItemList';
import InputItem from '../InputItem/InputItem';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

class App extends React.Component {
    state = {
        items: [
            {
               value: 'Написать новое приложение',
               isDone: true
            },
            {
               value: 'Дочитать книгу',
               isDone: true
            },
            {
               value: 'Закончить обучение',
               isDone: false
            }
         ]
    };

    onClickDone = isDone => console.log(isDone);

    render() {
        return (
            <div className={styles.wrap}>
                 <h1 className={styles.title}>Важные дела!</h1>
                 <div className ={styles.todosWrap}>
                 <InputItem />
                 <ItemList items={this.state.items} onClickDone={this.onClickDone} />
                 <Footer count={3} />
           </div>
     </div>);
 }
};

export default App;
