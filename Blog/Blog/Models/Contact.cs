using System;
using Newtonsoft.Json;

namespace Blog.Models
{
    public class Contact
    {
        [JsonProperty(PropertyName = "email")]
        public string Email { get; set; }

        [JsonProperty(PropertyName = "linkedIn")]
        public string LinkedIn { get; set; }

        [JsonProperty(PropertyName = "github")]
        public string Github { get; set; }
    }
}
