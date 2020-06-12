using System;
using Newtonsoft.Json;

namespace Blog.Models
{
    public class AboutMe
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }

        [JsonProperty(PropertyName = "description")]
        public string Description { get; set; }

        [JsonProperty(PropertyName = "about")]
        public IEnumerable<string> About { get; set; }

        [JsonProperty(PropertyName = "contact")]
        public Contact Contact { get; set; }

        [JsonProperty(PropertyName = "history")]
        public WorkHistory History { get; set; }
    }
}
