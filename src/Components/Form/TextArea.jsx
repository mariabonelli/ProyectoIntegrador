import "./FormStyle.css";

function TextArea({ outlined }) {
  console.log(outlined);
  return (
    <>
      {/* evaluacion ejemplo 1!=1 ?evualiacion verdadera:evaluacion falsa */}
      <div className={!outlined ? "textfield" : "textfield textfield_outlined"}>
        <textarea
          name="c"
          id="comentario"
          rows="4"
          placeholder="Comentario"
          /* style={{marginRight: spacing + 'em'}} */
          style={{ resize: "none" }}
        ></textarea>
        <label htmlFor="comentario">Comentario</label>
      </div>
    </>
  );
}
export default TextArea;
