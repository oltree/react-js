import Counter from "../../../components/Counter";
import { useCounter } from "../../../hooks";

const FunctionalCounterContainer = () => {
  const { count, handleIncrement, handleDecrement, handleReset } =
    useCounter(0);

  return (
    <Counter
      countValue={count}
      onIncrement={handleIncrement}
      onDecrement={handleDecrement}
      onReset={handleReset}
    />
  );
};

export default FunctionalCounterContainer;

//Равзвернутая  версия с пояснением

/* const [count, setCount] = useState(0);

  const handleIncrement = useCallback(() => setCount((state) => state + 1), []); */
//useCallback - мемоизирует функции(принимает cb и arr-зависимостей)
//обновленное значение count можно не передавать в arr, если мы используем cb-fn
//useMemo - мемоизирует объекты, массивы
/* const userData = useMemo(() => {
    return { name: "alex" };
  }, []); */

/* const handleDecrement = useCallback(() => {
    if (count > 0) {
      setCount(count - 1);
    }
  }, [count]); */
//например подписываемся на изменение какой-то зависимости из redux и мы будет обязаны передать ее в []

/* const handleDecrement = useCallback(() => {
    setCount((state) => {
      if (state > 0) {
        return state - 1;
      }
    });
  }, []);

  const handleReset = useCallback(() => setCount(0), []); */

/* useEffect(() => {
    //принимает 2 аргумента(cb-fn, arr-зависимостей), по сути useEffect вызывает cb-fn каждый раз когда какая-то зависимость меняется(если нет зависимостей в arr, то он сработает только 1 раз) - Did Mount
    console.log("Did Mount");
  }, []); */

/* useEffect(() => {
    //срабатывает тогда, когда изменяется count - Did Update
    console.log("Did Update");
  }, [count]); */

/* useEffect(() => {
  //не передаем arr-зависимостей - будет срабатывать на все подряд
  console.log("Так не надо делать!");
  }); */

/* useEffect(() => {
    //чтобы сработал Did Unmount, мы должны из этого cb-fn  вернуть fn обратного вызова
    return () => {
      console.log("Did Unmount");
    };
  }, []); */
