import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => {
  // wrapper: {
  //   border: "1px solid grey",
  //   "& input": {
  //     background: "grey",
  //   },
  // },
  console.log("ctx", ctx);
  return {
    input: {
      fontFamily: `${ctx.typography.body2}`,
      color: `${ctx.palette.primary.main}`,
      padding: "10px 15px",
      fontSize: "15px",
    },
    icon: {
      color: `${ctx.palette.primary.main}`,
      cursor: "pointer",
    },
  };
});
