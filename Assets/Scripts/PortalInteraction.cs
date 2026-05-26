using TMPro;
using UnityEngine;
using UnityEngine.InputSystem;
using UnityEngine.SceneManagement;

public class PortalInteraction : MonoBehaviour
{
    public enum PortalState
    {
        Active,
        Maintenance
    }

    [Header("Portal")]
    public string portalName = "Astronomia";
    public PortalState portalState = PortalState.Active;
    public string targetSceneName = "Astronomy";

    [Header("Player")]
    public string playerTag = "Player";

    [Header("UI")]
    public GameObject promptPanel;
    public TMP_Text promptText;

    private bool playerIsInside = false;

    void Start()
    {
        HidePrompt();
    }

    void Update()
    {
        if (!playerIsInside)
            return;

        if (Keyboard.current == null)
            return;

        if (Keyboard.current.eKey.wasPressedThisFrame)
        {
            TryEnterPortal();
        }
    }

    void OnTriggerEnter(Collider other)
    {
        if (!other.CompareTag(playerTag))
            return;

        playerIsInside = true;
        ShowPrompt();
    }

    void OnTriggerExit(Collider other)
    {
        if (!other.CompareTag(playerTag))
            return;

        playerIsInside = false;
        HidePrompt();
    }

    void ShowPrompt()
    {
        if (promptPanel == null || promptText == null)
            return;

        promptPanel.SetActive(true);

        if (portalState == PortalState.Active)
        {
            promptText.text = $"Pressione [E] para entrar em {portalName}";
        }
        else
        {
            promptText.text = $"Portal de {portalName} em manutenção";
        }
    }

    void HidePrompt()
    {
        if (promptPanel != null)
        {
            promptPanel.SetActive(false);
        }
    }

    void TryEnterPortal()
    {
        if (portalState == PortalState.Maintenance)
            return;

        if (string.IsNullOrWhiteSpace(targetSceneName))
        {
            Debug.LogWarning($"Portal {portalName} não tem cena de destino configurada.");
            return;
        }

        SceneManager.LoadScene(targetSceneName);
    }
}
