<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">Punk Starter</NuxtLink>
    </div>

    <div class="flex-none">
      <ul class="menu menu-horizontal p-0">
        <li><NuxtLink class="" to="/">Home page</NuxtLink></li>
        <li><NuxtLink class="" to="/profile">Profile page</NuxtLink></li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>