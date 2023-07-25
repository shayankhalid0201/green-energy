// JavaScript Object containing the solutions
  const solutions = {
    solution1: {
      title: "Ocean Energy Harvesting",
      text: "Harnessing the vast power of the oceans, ocean energy represents a promising renewable energy solution with tremendous potential. Our innovative technology, OceanFlow, utilizes the natural ebb and flow of tides to generate electricity. The system consists of underwater turbines strategically placed along coastal areas, where the tidal currents are strong. As the tides rise and fall, the turbines spin, converting kinetic energy into clean electrical power. OceanFlow boasts a low environmental impact, as it doesn't require any emissions or fuel consumption. With over 70% of the Earth's surface covered by oceans, this untapped energy source can play a crucial role in reducing our dependence on fossil fuels and combating climate change.",
    },
    solution2: {
      title: "Piezoelectric Energy Harvesting",
      text: "Imagine generating electricity from the footsteps of pedestrians on busy city streets or the vibrations of moving vehicles on highways. Our revolutionary solution, PiezoCharge, does just that. Piezoelectric materials have the unique property of producing an electric charge when subjected to mechanical stress or pressure. By embedding these materials in high-traffic areas, such as sidewalks or roads, PiezoCharge captures the energy created by human movement and vehicular traffic. This energy is then converted into usable electricity to power streetlights, traffic signals, or even feed into the grid. Embracing this innovative technology not only reduces our carbon footprint but also transforms bustling urban areas into vibrant hubs of renewable energy production.",
    },
    solution3: {
      title: "Solar Paint Technology",
      text: "Traditional solar panels have undoubtedly revolutionized the renewable energy landscape, but what if we could integrate solar power into everyday surfaces effortlessly? Introducing SolarPaint, a game-changing solution that allows us to turn ordinary structures, like buildings and even vehicles, into solar energy harvesters. SolarPaint comprises a special blend of solar-absorbing nanoparticles suspended in a paint-like medium. When applied to surfaces exposed to sunlight, these nanoparticles capture solar energy and convert it into electricity. The possibilities are endless – imagine entire skyscrapers generating clean power, or electric vehicles recharging while sitting idle under the sun. SolarPaint represents a significant step towards a more aesthetically pleasing and accessible renewable energy future.",
    },
  };
  
  function updateContent(solution) {
    document.getElementById("solution-title").textContent = solutions[solution].title;
    document.getElementById("solution-text").textContent = solutions[solution].text;
  }
  
  document.getElementById("btn-solution1").addEventListener("click", function () {
    updateContent("solution1");
    document.getElementById("btn-solution1").classList.add("active-button");
    document.getElementById("btn-solution2").classList.remove("active-button");
    document.getElementById("btn-solution3").classList.remove("active-button");
  });
  
  document.getElementById("btn-solution2").addEventListener("click", function () {
    updateContent("solution2");
    document.getElementById("btn-solution1").classList.remove("active-button");
    document.getElementById("btn-solution2").classList.add("active-button");
    document.getElementById("btn-solution3").classList.remove("active-button");
  });
  
  document.getElementById("btn-solution3").addEventListener("click", function () {
    updateContent("solution3");
    document.getElementById("btn-solution1").classList.remove("active-button");
    document.getElementById("btn-solution2").classList.remove("active-button");
    document.getElementById("btn-solution3").classList.add("active-button");
  });
  
