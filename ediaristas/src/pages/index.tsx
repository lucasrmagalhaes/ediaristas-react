import SafeEnvironment from "ui/components/feedback/SafeEnvironment/SafeEnvironment";
import PageTitle from "ui/components/data-display/PageTitle/PageTitle";
import UserInformation from "ui/components/data-display/UserInformation/UserInformation";
import TextField from "ui/components/inputs/TextField/TextField";

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

      <TextField 
        label={'Digite seu CEP'}
        fullWidth
      />

      <UserInformation
        name={"Lucas"}
        picture={"https://github.com/lucasrmagalhaes.png"}
        rating={3}
        description={"Canoas"}
      />
    </div>
  );
}
