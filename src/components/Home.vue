<template>
  <div>
    <div class="bg"></div>
    <img class="logo" src="../assets/logo-white.png" width="150" />
    <p class="lbl-simulate">Simulador</p>
    <form class="home" v-on:submit="simular()">
      <div class="row">
        <div class="col-lg-12">
          <label class="control-label">Nome</label>

          <input class="form-input" placeholder="Informe seu nome" v-model="nome" />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label class="control-label">Mensalidade</label>
          <money
            v-model="mensalidade"
            v-bind="money"
            class="form-input"
            placeholder="Informe o valor da mensalidade"
          ></money>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <label class="control-label">Tempo</label>

          <select class="form-input" v-model="tempo">
            <option disabled selected value>Selecione</option>
            <option value="1">1 ano</option>
            <option value="2">2 anos</option>
            <option value="3">3 anos</option>
            <option value="4">4 anos</option>
            <option value="5">5 anos</option>
            <option value="6">6 anos</option>
            <option value="7">7 anos</option>
            <option value="8">8 anos</option>
            <option value="9">9 anos</option>
            <option value="10">10 anos</option>
          </select>
        </div>
      </div>

      <div class="row">
        <div class="col-lg-12">
          <button
            class="btn-action"
            v-bind:disabled="!nome || !mensalidade || !tempo"
            type="submit"
          >Simular</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import router from "../router";
import { mapFields } from "vuex-map-fields";
import { Money } from "v-money";

export default {
  components: { Money },
  name: "Home",
  data: () => {
    return {
      money: {
        decimal: ",",
        thousands: ".",
        prefix: "R$ ",
        suffix: "",
        precision: 2,
        masked: false
      }
    };
  },
  computed: {
    ...mapFields(["form.nome", "form.mensalidade", "form.tempo", "resultado"])
  },
  methods: {
    simular() {
      this.$store.dispatch("simular");
      router.push("resultado");
    }
  }
};
</script>
<style scoped>
.home {
  height: calc(100vh - 53px);
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 0 auto;
  max-width: 900px;
  position: relative;
  width: 100%;
}
.control-label {
  float: left;
  color: #f1f1f1;
  font-size: 14px;
  font-weight: 300;
}
.row {
  margin-bottom: 15px;
}

.form-input {
  background: transparent;
  border: none;
  color: #fff;
  display: block;
  font-size: 18px;
  outline: none;
  width: 100%;
  padding: 8px 16px;
  border-bottom: 1px solid #fff;
}

option {
  color: #333;
  font-size: 18px;
}

.lbl-simulate {
  color: #fff;
  font-size: 22px;
}


</style>
