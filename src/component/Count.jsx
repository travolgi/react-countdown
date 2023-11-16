import './Count.css';

export default function Count({ count, time }){
   return(
      <div className="card-flip">
         <span className="card-number">
            <span className="card-number-top" />
            {count}
         </span>
         <p>{time}</p>
      </div>
   );
}