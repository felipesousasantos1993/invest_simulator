<template>
  <div class="resultado">
    <div class="bg"></div>
    <img class="logo" src="../assets/logo-white.png" width="150" />
    <h1
      class="result"
    >Olá {{nome}}, juntando R$ {{mensalidade | toCurrency}} todo mês, você terá {{resultado | toCurrency}} em {{tempo}} ano(s).</h1>

    <div class="row">
      <div class="col-lg-12">
        <router-link to="/" class="btn-action btn-m-top" tag="button">Simular Novamente</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";

export default {
  filters: {
    toCurrency: value => {
      var formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
        minimumFractionDigits: 2
      });
      return formatter.format(value);
    }
  },
  name: "Resultado",
  computed: {
    ...mapFields(["form.nome", "form.mensalidade", "form.tempo", "resultado"])
  }
};
</script>
 
<style scoped>
h1 {
  color: #fff;
}
.result {
  margin: 80px auto;
}
.btn-m-top {
  margin-top: 50px;
}
</style>
