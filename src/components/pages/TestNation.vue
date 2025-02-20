<template>
    <div class="container mx-auto p-4">
      <h1 class="text-3xl font-bold mb-4">{{ nation.name }}</h1>
      <p class="text-gray-700 mb-6">{{ nation.narrative }}</p>
  
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Política</h2>
          <div class="mb-4">
            <h3 class="text-xl font-medium mb-1">Exterior</h3>
            <ul class="list-disc pl-5">
              <li v-for="war in nation.politics.exterior.wars" :key="war.name">
                {{ war.name }} ({{ war.beligerantes.map(b => b.nacion).join(' vs ') }})
              </li>
            </ul>
            <h4 class="text-lg font-medium mt-2">Alianzas</h4>
            <ul class="list-disc pl-5">
              <li v-for="alliance in nation.politics.exterior.alliances" :key="alliance.name">
                {{ alliance.name }} ({{ alliance.members.join(', ') }})
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-xl font-medium mb-1">Interior</h3>
            <p>Gobierno: {{ nation.politics.interior.government_type }}</p>
            <h4 class="text-lg font-medium mt-2">Líderes</h4>
            <ul class="list-disc pl-5">
              <li v-for="leader in nation.politics.interior.leaders" :key="leader.name">
                {{ leader.name }} ({{ leader.title }})
              </li>
            </ul>
            <h4 class="text-lg font-medium mt-2">Tensiones</h4>
            <div class="flex flex-col">
              <div v-for="(tensionType, tensions) in nation.politics.interior.tensions" :key="tensionType">
                <h5 class="text-base font-medium">{{ tensionType }}</h5>
                <ul class="list-disc pl-5">
                  <li v-for="tension in tensions" :key="tension.organization">
                    {{ tension.organization }} ({{ tension.demands || tension.beliefs }})
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
  
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Economía</h2>
          <ul class="list-disc pl-5">
            <li v-for="resource in nation.economy.resources" :key="resource.name">
              {{ resource.name }} ({{ resource.quantity }} {{ resource.unit }})
            </li>
          </ul>
          <p>Leyes económicas: {{ nation.economy.laws.economic }}</p>
          <p>Leyes comerciales: {{ nation.economy.laws.trade }}</p>
        </div>
  
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Historia</h2>
          <p>Origen: {{ nation.history.origin }}</p>
          <h4 class="text-lg font-medium mt-2">Eventos clave</h4>
          <ul class="list-disc pl-5">
            <li v-for="event in nation.history.key_events" :key="event.fecha">
              {{ event.descripcion }} ({{ event.fecha }})
            </li>
          </ul>
        </div>
  
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Demografía</h2>
          <p>Población: {{ nation.demographics.population.size }}</p>
          <h4 class="text-lg font-medium mt-2">Etnicidades</h4>
          <ul class="list-disc pl-5">
            <li v-for="ethnicity in nation.demographics.population.ethnicities" :key="ethnicity">
              {{ ethnicity }}
            </li>
          </ul>
          <h4 class="text-lg font-medium mt-2">Culturas</h4>
          <ul class="list-disc pl-5">
            <li v-for="culture in nation.demographics.cultures" :key="culture">
              {{ culture }}
            </li>
          </ul>
          <h4 class="text-lg font-medium mt-2">Ocupaciones</h4>
          <ul class="list-disc pl-5">
            <li v-for="occupation in nation.demographics.occupations" :key="occupation">
              {{ occupation }}
            </li>
          </ul>
        </div>
  
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Geografía</h2>
          <p>Área: {{ nation.geography.land_area }}</p>
          <p>Clima: {{ nation.geography.climate }}</p>
          <h4 class="text-lg font-medium mt-2">Características naturales</h4>
          <ul class="list-disc pl-5">
            <li v-for="feature in nation.geography.natural_features" :key="feature">
              {{ feature }}
            </li>
          </ul>
        </div>
  
        <div class="bg-white rounded-lg shadow p-4">
          <h2 class="text-2xl font-semibold mb-2">Cultura</h2>
          <h4 class="text-lg font-medium mt-2">Tradiciones</h4>
          <ul class="list-disc pl-5">
            <li v-for="tradition in nation.culture.traditions" :key="tradition">
              {{ tradition }}
            </li>
          </ul>
          <h4 class="text-lg font-medium mt-2">Artes</h4>
          <ul class="list-disc pl-5">
            <li v-for="art in nation.culture.arts" :key="art">
              {{ art }}
            </li>
          </ul>
          <h4 class="text-lg font-medium mt-2">Idiomas</h4>
          <ul class="list-disc pl-5">
            <li v-for="language in nation.culture.languages" :key="language">
              {{ language }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      nation: {
        type: Object,
        required: true
      }
    }
  };
  </script>