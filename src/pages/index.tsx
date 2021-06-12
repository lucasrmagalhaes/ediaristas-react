import SafeEnvironment from "@components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "@components/data-display/PageTitle/PageTitle";
import UserInformation from "@components/data-display/UserInformation/UserInformation";
import TextFieldMask from "@components/inputs/TextFieldMask/TextFieldMask";
import { Button, Typography, Container } from "@material-ui/core";
import { FormElementsContainer, ProfissionaisPaper, ProfissionaisContainer } from "@styles/pages/index.style";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais da sua localidade"
        }
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
          />
          <Typography
            color={'error'}
          >
            CEP inválido
          </Typography>
          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{width: '220px'}}
          >
            Buscar
          </Button>
        </FormElementsContainer>
        
        <ProfissionaisPaper>
          <ProfissionaisContainer>
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
            <UserInformation
              name={"Lucas"}
              picture={"https://github.com/lucasrmagalhaes.png"}
              rating={3}
              description={"Canoas"}
            />
          </ProfissionaisContainer>
        </ProfissionaisPaper>  
      </Container>
    </div>
  );
}
