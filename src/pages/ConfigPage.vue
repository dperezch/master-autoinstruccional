<template>
  <q-page padding class="pagina bg-white flex items-center justify-center poppins-font">
    <div>
      <div class="text-weight-bolder q-ml-xl" style="font-size: 15px;">Puedes contactarnos a:</div>
      <br>
      <q-card class="my-card" flat>
        <q-card-section class="flex flex-center">
          <div class="contacto"></div>
        </q-card-section>
        <q-card-section class="q-ml-xl">
          <q-list>
        <q-item clickable>
          <q-item-section avatar>
            <q-icon size="3em" color="blue" name="phone_in_talk" />
          </q-item-section>

          <q-item-section>
            <q-item-label>TELÉFONO</q-item-label>
            <q-item-label class="text-weight-bolder" style="font-size: 15px;" > 9 - 39138316</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon size="3em" color="green" name="whatsapp" />
          </q-item-section>

          <q-item-section>
            <q-item-label>WHATSAPP</q-item-label>
            <q-item-label class="text-weight-bolder" style="font-size: 15px;"> +569 39138316</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable>
          <q-item-section avatar>
            <q-icon size="3em" color="red" name="mail_outline" />
          </q-item-section>

          <q-item-section>
            <q-item-label>CORREO ELECTRÓNICO</q-item-label>
            <q-item-label class="text-weight-bolder" style="font-size: 15px;">gestion@sustantiva.cl</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
        </q-card-section>
      </q-card>
      
    </div>
    <div>
      
    </div>
  </q-page>
</template>

<script setup>


</script>

<style scoped>
.pagina{
    border-radius: 32px 32px 32px 32px;
  }
.my-card{
  width: 500px;
}
.contacto{ 
  background: url("assets/contacto.png");
  background-size: cover;
  width: 300px;
  height: 200px;
}
</style>