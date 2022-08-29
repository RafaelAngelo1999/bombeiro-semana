import React, { useEffect, useState } from "react";
import { Grid, Container, Button, Typography, Box } from "@mui/material";
import { ReactComponent as BombeiroSvg } from "./shared/svg/bombeiro.svg";
import { ReactComponent as FogoSvg } from "./shared/svg/fogo.svg";
import TeamsPng from "./shared/png/teams.png";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { IDesenvolvedorModel } from "./shared/models/DesenvolvedorModel";
import useBombeiro from "./hooks/useBombeiro";

function App() {
  const useBombeiroHook = useBombeiro();
  const [bombeiro, setBombeiro] = useState<IDesenvolvedorModel | undefined>(
    undefined
  );

  useEffect(() => {
    const obterNumero = async () => {
      const { ultimoNumero, penultimoEhPar } =
        await useBombeiroHook.obterDesenvolvedorDaSemana();

      setBombeiro(
        useBombeiroHook.obterDesenvolvedorPorNumero(
          ultimoNumero,
          penultimoEhPar
        )
      );
    };
    obterNumero();
  }, []);

  const objetivosBombeiro: string[] = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commod",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commod",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commod",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maximemollitia, molestiae quas vel sint commod",
  ];

  return (
    <Container>
      <Grid mt={1} container spacing={3}>
        <Grid item xs>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            mt={10}
          >
            <Typography variant="h3" color={"#E43B1B"}>
              Bombeiro da semana
            </Typography>
            <Typography color={"#54595F"} py={3} variant="h6">
              É um documento oficial emitido pelo Corpo de Bombeiros e é um dos
              requisitos necessários para obtenção de alvarás para condomínios,
              indústrias e funcionamento de comércios.
            </Typography>
          </Grid>
          <Typography
            color={"#E43B1B"}
            mt={5}
            mb={3}
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            👨‍🚒: {bombeiro?.nome}
          </Typography>
          <Button
            href={`https://teams.microsoft.com/l/chat/0/0?users=${bombeiro?.email}`}
            target="_blank"
            rel="noopener noreferrer"
            variant="contained"
            sx={{ backgroundColor: "#4952A0" }}
            endIcon={<img src={TeamsPng} width={20} height={20} />}
          >
            Abrir Teams
          </Button>
        </Grid>
        <Grid item xs>
          <BombeiroSvg />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <FogoSvg />
        </Grid>
        <Grid item xs>
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            mt={10}
          >
            <Typography mb={5} color={"#E43B1B"} variant="h3">
              Objetivo do bombeiro
            </Typography>
          </Grid>
          {objetivosBombeiro.map((objetivo, index) => (
            <Box key={index} pb={2} sx={{ display: "flex" }}>
              <CheckBoxIcon sx={{ color: "#E43B1B" }} />
              <Typography color={"#54595F"} pl={2} variant="body1">
                {objetivo}
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
